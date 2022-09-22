
const notificationsToRead = document.querySelectorAll('.notification.unread')

const updateQtyNotificationsUnread = () => {
    let qtyNotificationsUnread = document.querySelectorAll('.notification.unread').length
    document.querySelector('.notifications-counter').innerHTML = qtyNotificationsUnread
}

const readNotification = (e) => {
    e.target.classList.remove("unread")
    updateQtyNotificationsUnread()
}

const readAllNotifications = () => {
    notificationsToRead.forEach((element) => {
        element.classList.remove("unread")
    })
    updateQtyNotificationsUnread()
}

notificationsToRead.forEach((element) => {
    element.addEventListener("click", readNotification)
})

document.querySelector('.mark-all-btn').addEventListener("click", readAllNotifications)

updateQtyNotificationsUnread()