export default function NotificationList() {
  const notifications = [
    {
      id: 1,
      title: 'Appointment Cancelled!',
      time: '15:36 PM',
      message: 'You have successfully canceled your appointment with Dr. Kumar Das on December 24, 2024.',
      iconColor: 'bg-red-500',
      icon: 'X', // Icon Letter
    },
    {
      id: 2,
      title: 'Schedule Changed',
      time: '09:23 AM',
      message: 'You have successfully changed schedule an appointment with Dr. Kumar Das on December 24, 2024.',
      iconColor: 'bg-green-500',
      icon: 'S', // Icon Letter
    },
    {
      id: 3,
      title: 'Rescheduled by Doctor',
      time: '15:36 PM',
      message: 'Your appointment with Dr. Kumar Das has been rescheduled.',
      iconColor: 'bg-purple-500',
      icon: 'R', // Icon Letter
    },
    {
      id: 4,
      title: 'Appointment Success!',
      time: '18:35 PM',
      date: '19 Dec, 2022',
      message: 'You have successfully booked an appointment with Dr. Kumar Das on December 24, 2024, 10:00 AM.',
      iconColor: 'bg-blue-500',
      icon: 'A', // Icon Letter
    },
  ];

  return (
    <div className="mx-auto min-h-screen max-w-2xl rounded-lg border border-gray-200 bg-white p-4 shadow-lg">
      {/* Header Section */}

      {/* Notifications List */}
      <div className="divide-y rounded-lg bg-white ">
        {notifications.map(notification => (
          <div key={notification.id} className="flex items-start  p-4">
            {/* Icon */}
            <div className={`size-10 shrink-0 ${notification.iconColor} mr-4 flex items-center justify-center rounded-full text-white`}>
              <span className="text-xl font-semibold">{notification.icon}</span>
            </div>

            {/* Title and Message */}
            <div className="flex-1">
              {/* Title and Time in One Line */}
              <div className="mb-1 flex items-center justify-between">
                <span className="text-lg font-semibold">{notification.title}</span>
                <span className="text-sm text-gray-500">{notification.time}</span>
              </div>

              {/* Notification Message */}
              <p className="text-sm text-gray-600">{notification.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
