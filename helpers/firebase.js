import { getStartOfToday, epochDays } from '~/helpers/utils/dateutils'

export async function deleteUser(fireAuth, firestore) {
  // Delete all user data
  await firestore.collection('users').doc(fireAuth.currentUser.uid).delete()

  // Delete account
  fireAuth.currentUser.delete()
}

export async function getStreakCount(fireAuth, firestore) {
  const dateToday = getStartOfToday()
  const streakCount = await getStat(fireAuth, firestore, 'streak')
  const streakLastDate = await getStat(fireAuth, firestore, 'streak_date')

  if (!streakLastDate) {
    await setStat(fireAuth, firestore, 'streak', 1)
    await setStat(fireAuth, firestore, 'streak_date', getStartOfToday())

    return 1
  }
  if (dateToday - streakLastDate <= epochDays(1)) return streakCount
  else {
    await setStat(fireAuth, firestore, 'streak', null)
    await setStat(fireAuth, firestore, 'streak_date', null)

    return null
  }
}

export async function incrementStreak(fireAuth, firestore) {
  const dateToday = getStartOfToday()
  const streakCount = await getStat(fireAuth, firestore, 'streak')
  const streakLastDate = await getStat(fireAuth, firestore, 'streak_date')

  if (!streakLastDate) {
    await setStat(fireAuth, firestore, 'streak', 1)
    await setStat(fireAuth, firestore, 'streak_date', getStartOfToday())
  }

  if (streakLastDate === dateToday) return

  if (dateToday - streakLastDate === epochDays(1)) {
    await setStat(fireAuth, firestore, 'streak', streakCount + 1)
    await setStat(fireAuth, firestore, 'streak_date', getStartOfToday())
  } else {
    await setStat(fireAuth, firestore, 'streak', null)
    await setStat(fireAuth, firestore, 'streak_date', null)
  }
}

export async function getStat(fireAuth, firestore, statName) {
  const doc = await firestore
    .collection('users')
    .doc(fireAuth.currentUser.uid)
    .collection('misc')
    .doc('stats')
    .get()

  const data = doc.data()
  return data ? doc.data()[statName] : null
}

export async function setStat(fireAuth, firestore, statName, statValue) {
  const doc = await firestore
    .collection('users')
    .doc(fireAuth.currentUser.uid)
    .collection('misc')
    .doc('stats')
    .get()

  if (!doc.exists) {
    const obj = {}
    obj[statName] = statValue

    await firestore
      .collection('users')
      .doc(fireAuth.currentUser.uid)
      .collection('misc')
      .doc('stats')
      .set(obj)
  } else {
    const obj = {}
    obj[statName] = statValue

    await firestore
      .collection('users')
      .doc(fireAuth.currentUser.uid)
      .collection('misc')
      .doc('stats')
      .update(obj)
  }
}

export async function cancelLogTask(fireAuth, firestore, log) {
  if (!log.id) throw new Error('No log ID')

  await firestore
    .collection('users')
    .doc(fireAuth.currentUser.uid)
    .collection('log')
    .doc(log.id)
    .update({ taskStatus: 'CANCELLED' })
}

export async function completeLogTask(fireAuth, firestore, log) {
  if (!log.id) throw new Error('No log ID')

  await firestore
    .collection('users')
    .doc(fireAuth.currentUser.uid)
    .collection('log')
    .doc(log.id)
    .update({ taskStatus: 'COMPLETED' })
}

// DEPRECATE
export async function completeTaskForToday(fireAuth, firestore) {
  const query = await firestore
    .collection('users')
    .doc(fireAuth.currentUser.uid)
    .collection('log')
    .where('date', '==', getStartOfToday())
    .limit(1)
    .get()

  if (query.empty) throw new Error('No log entry today')

  const docID = query.docs[0].id

  await firestore
    .collection('users')
    .doc(fireAuth.currentUser.uid)
    .collection('log')
    .doc(docID)
    .update({
      taskStatus: 'COMPLETED',
    })
}

// DEPRECATE
export async function cancelTaskForToday(fireAuth, firestore) {
  const query = await firestore
    .collection('users')
    .doc(fireAuth.currentUser.uid)
    .collection('log')
    .where('date', '==', getStartOfToday())
    .limit(1)
    .get()

  if (query.empty) throw new Error('No log entry today')

  const docID = query.docs[0].id

  await firestore
    .collection('users')
    .doc(fireAuth.currentUser.uid)
    .collection('log')
    .doc(docID)
    .update({
      taskStatus: 'CANCELLED',
    })
}

// Resolves with the data if logged today
// Resolves with null if not logged today
export async function getLogForToday(fireAuth, firestore) {
  const query = await firestore
    .collection('users')
    .doc(fireAuth.currentUser.uid)
    .collection('log')
    .where('date', '==', getStartOfToday())
    .limit(1)
    .get()

  if (query.empty) return null

  const doc = query.docs[0]

  return {
    id: doc.id,
    ...doc.data(),
  }
}

// onLog: (log: Log[]) => void
// Returns a function which can be called to cancel the subscription
export function subscribeToLogForToday(fireAuth, firestore, onLogUpdate) {
  return firestore
    .collection('users')
    .doc(fireAuth.currentUser.uid)
    .collection('log')
    .where('date', '==', getStartOfToday())
    .orderBy('createdOn', 'desc')
    .onSnapshot({
      next: (snapshot) => {
        onLogUpdate(
          snapshot.docs.map((e) => {
            return {
              id: e.id,
              ...e.data(),
            }
          })
        )
      },
    })
}

export async function addLogEntryForToday(fireAuth, firestore, entry) {
  if (entry.id) throw new Error('Already existing entry ID found.')

  const docRef = await firestore
    .collection('users')
    .doc(fireAuth.currentUser.uid)
    .collection('log')
    .add({
      date: getStartOfToday(),
      createdOn: Date.now(),
      ...entry,
    })

  const doc = await docRef.get()

  return {
    id: doc.id,
    ...doc.data(),
  }
}

export async function updateLogEntry(fireAuth, firestore, entry) {
  if (!entry.id) throw new Error('Entry ID not found.')

  const storedData = entry
  delete storedData.id

  await firestore
    .collection('users')
    .doc(fireAuth.currentUser.uid)
    .collection('log')
    .doc(entry.id)
    .set(storedData)
}

export async function deleteLogEntry(fireAuth, firestore, id) {
  if (!id) throw new Error('Entry ID not found.')

  await firestore
    .collection('users')
    .doc(fireAuth.currentUser.uid)
    .collection('log')
    .doc(id)
    .delete()
}

export async function getLogEntriesForPast7Days(fireAuth, firestore) {
  const query = await firestore
    .collection('users')
    .doc(fireAuth.currentUser.uid)
    .collection('log')
    .where('date', '>=', getStartOfToday() - epochDays(7))
    .get()

  return query.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    }
  })
}

// onLogUpdate: (logs: Array<Log>) => void
// Returns a function which can be called to cancel the subscription
// onLogUpdate initial call will be called initialy and then in
// the future and will always have all the logs
export function subscribeToLogEntriesForPast7Days(
  fireAuth,
  firestore,
  onLogUpdate
) {
  return firestore
    .collection('users')
    .doc(fireAuth.currentUser.uid)
    .collection('log')
    .where('date', '>=', getStartOfToday() - epochDays(7))
    .orderBy('date', 'desc')
    .orderBy('createdOn', 'desc')
    .onSnapshot({
      next: (snapshot) => {
        onLogUpdate(
          snapshot.docs.map((e) => {
            return {
              id: e.id,
              ...e.data(),
            }
          })
        )
      },
    })
}
