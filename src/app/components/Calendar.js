import React, { useState } from 'react';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 w-64">
      <div className="flex justify-between mb-4">
        <button onClick={prevMonth}>&lt;</button>
        <h2 className="font-bold">{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
        <button onClick={nextMonth}>&gt;</button>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
          <div key={day} className="text-center font-bold">{day}</div>
        ))}
        {Array(firstDayOfMonth).fill(null).map((_, index) => (
          <div key={`empty-${index}`} />
        ))}
        {days.map(day => (
          <button
            key={day}
            className="w-8 h-8 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition"
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calendar;