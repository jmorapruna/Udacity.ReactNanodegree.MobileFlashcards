import { AsyncStorage } from 'react-native'
import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions'

const NOTIFICATION_KEY = 'MobileFlashcards:notifications'

function createNotification() {
  return {
    title: 'Everything takes practice',
    body: "👋 Don't forget to take the quiz of the day!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

export async function setLocalNotificationAsync() {
  const json = await AsyncStorage.getItem(NOTIFICATION_KEY)
  const data = JSON.parse(json)

  if (data !== null)
    return

  const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS)

  if (status === 'granted') {
    await Notifications.cancelAllScheduledNotificationsAsync()

    let tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    tomorrow.setHours(18)
    tomorrow.setMinutes(0)

    await Notifications.scheduleLocalNotificationAsync(
      createNotification(),
      {
        time: tomorrow,
        repeat: 'day',
      }
    )

    await AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
  }
}

export async function clearLocalNotificationAsync() {
  await AsyncStorage.removeItem(NOTIFICATION_KEY)
  await Notifications.cancelAllScheduledNotificationsAsync()
}
