
import React from 'react';
import { useTranslation } from '../../App';
import { EVENTS_DATA } from '../../constants';
import { Calendar, MapPin } from 'lucide-react';

export const Events: React.FC = () => {
  const { t } = useTranslation();

  const upcomingEvents = EVENTS_DATA.filter(e => e.status === 'upcoming');
  const pastEvents = EVENTS_DATA.filter(e => e.status === 'past');

  return (
    <div className="animate-fade-in min-h-screen bg-white dark:bg-gray-900">
      <div className="bg-gray-100 dark:bg-gray-800 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white tracking-widest">{t.events_title}</h1>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Upcoming Section */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 pl-4 border-l-4 border-blue-600">
          {t.events_upcoming}
        </h2>
        <div className="space-y-8 mb-16">
          {upcomingEvents.map(event => (
            <div key={event.id} className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow flex flex-col md:flex-row">
              <div className="md:w-1/3 h-64 md:h-auto">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 md:w-2/3 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-sm mb-3 uppercase tracking-wider">
                  <Calendar size={16} /> {event.date}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{event.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{event.desc}</p>
                <button className="self-start px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium text-sm hover:opacity-80 transition-opacity">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Past Section */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 pl-4 border-l-4 border-gray-400">
          {t.events_past}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {pastEvents.map(event => (
            <div key={event.id} className="opacity-75 hover:opacity-100 transition-opacity cursor-pointer">
              <div className="rounded-xl overflow-hidden mb-4 h-48">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
              <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">{event.date}</p>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{event.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
