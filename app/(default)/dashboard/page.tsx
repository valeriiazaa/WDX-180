export const metadata = {
  title: 'Dashboard - Mosaic',
  description: 'Page description',
}

import WelcomeBanner from './welcome-banner'
import DashboardAvatars from './dashboard-avatars'
import FilterButton from '@/components/dropdown-filter'
import Datepicker from '@/components/datepicker'


import { CalendarProvider } from '../calendar/calendar-context'
import CalendarNavigation from '../calendar/calendar-navigation'
import CalendarTable from '../calendar/calendar-table'
import CalendarTitle from '../calendar/title'


import Title from "@/components/ui/title";

const progressSteps = [
  {
    icon: "calendar",
    title: "Day 1",
    subtitle: "Computing",
    content: "Lorem Ipsum",
    terms: ["Computing", "Binary", "Hexadecimal", "Compression"]
  },
  {
    icon: "calendar",
    title: "Day 2",
    subtitle: "Internet & the Web",
    content: "Lorem Ipsum",
    terms: ["Internet", "LAN", "WAN", "WWW"]
  },
  {
    icon: "calendar",
    title: "Day 3",
    subtitle: "HTML",
    content: "Lorem Ipsum",
    terms: ["HTML", "HTTP", "Elements", "Tags"]
  },
  {
    icon: "calendar",
    title: "Day 4",
    subtitle: "CSS",
    content: "Lorem Ipsum",
    terms: ["One", "Two", "Three", "Four"]
  },
  {
    icon: "calendar",
    title: "Day 5",
    subtitle: "JavaScript",
    content: "Lorem Ipsum",
    terms: ["One", "Two", "Three", "Four"]
  }
]

type ProgressStep = {
  icon: string
  title: string
  subtitle: string
  content: string,
  terms?: string[]
}

type IProgress = {
  data: ProgressStep[]
}

type IProgressIcons = {
  [key: string]: JSX.Element
}

type ITermBadge = {
  term: string
}

function TermBadge({ term }: ITermBadge) {
  return (
    <div className="text-sm inline-flex font-medium bg-indigo-100 dark:bg-indigo-500/30 text-indigo-600 dark:text-indigo-400 rounded-full text-center px-4 py-1 m-1 cursor-pointer dark:hover:bg-indigo-500 dark:hover:text-white">{term}</div>
  )
}

/**
 * Source: https://flowbite.com/docs/components/timeline/#stepper-timeline
 * @param data 
 * @returns JSX.Element
 */
function Progress({ data }: IProgress) {

  const icons: IProgressIcons = {
    calendar: (
      <svg
        className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
      </svg>
    )
  }

  return (
    <section className="wdx-progress">
      <Title level={2}>Student Progress</Title>
      <Title level={3}>Week 1</Title>
      <ol className="items-center sm:flex">
        {data.map(step => {
          return (
            <li className="relative mb-6 sm:mb-0 flex-1">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  {icons[step.icon]}
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
              </div>
              <div className="mt-3 sm:pr-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {step.subtitle}
                </time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  {step.content}
                </p>
                {step.terms && (
                  <p className="mt-2 -ml-2">
                    {
                      step.terms.map(term => {
                        return (<TermBadge term={term} />)
                      })
                    }
                  </p>
                )}
              </div>
            </li>
          )
        })}
      </ol>
    </section>

  )
}

export default function Dashboard() {

  // Some dummy events data
  const events = [
    // Previous month
    {
      eventStart: new Date(new Date().getFullYear(), new Date().getMonth() - 1, 8, 3),
      eventEnd: new Date(new Date().getFullYear(), new Date().getMonth() - 1, 8, 7),
      eventName: '⛱️ Relax for 2 at Marienbad',
      eventColor: 'indigo'
    },
    {
      eventStart: new Date(new Date().getFullYear(), new Date().getMonth() - 1, 12, 10),
      eventEnd: new Date(new Date().getFullYear(), new Date().getMonth(), 12, 11),
      eventName: 'Team Catch-up',
      eventColor: 'sky'
    },
    {
      eventStart: new Date(new Date().getFullYear(), new Date().getMonth() - 1, 18, 2),
      eventEnd: null,
      eventName: '✍️ New Project (2)',
      eventColor: 'yellow'
    },
    // Current month
    {
      eventStart: new Date(new Date().getFullYear(), new Date().getMonth(), 1, 10),
      eventEnd: new Date(new Date().getFullYear(), new Date().getMonth(), 1, 11),
      eventName: 'Meeting w/ Patrick Lin',
      eventColor: 'sky'
    },
    {
      eventStart: new Date(new Date().getFullYear(), new Date().getMonth(), 1, 19),
      eventEnd: null,
      eventName: 'Reservation at La Ginestre',
      eventColor: 'indigo'
    },
    {
      eventStart: new Date(new Date().getFullYear(), new Date().getMonth(), 3, 9),
      eventEnd: new Date(new Date().getFullYear(), new Date().getMonth(), 3, 10),
      eventName: '✍️ New Project',
      eventColor: 'yellow'
    },
    {
      eventStart: new Date(new Date().getFullYear(), new Date().getMonth(), 7, 21),
      eventEnd: new Date(new Date().getFullYear(), new Date().getMonth(), 7, 22),
      eventName: '⚽ 2021 - Semi-final',
      eventColor: 'red'
    },
    {
      eventStart: new Date(new Date().getFullYear(), new Date().getMonth(), 9, 10),
      eventEnd: new Date(new Date().getFullYear(), new Date().getMonth(), 9, 11),
      eventName: 'Meeting w/Carolyn',
      eventColor: 'sky'
    },
    {
      eventStart: new Date(new Date().getFullYear(), new Date().getMonth(), 9, 13),
      eventEnd: null,
      eventName: 'Pick up Marta at school',
      eventColor: 'emerald'
    },
    {
      eventStart: new Date(new Date().getFullYear(), new Date().getMonth(), 9, 14),
      eventEnd: new Date(new Date().getFullYear(), new Date().getMonth(), 9, 15),
      eventName: 'Meeting w/ Patrick Lin',
      eventColor: 'emerald'
    },
    {
      eventStart: new Date(new Date().getFullYear(), new Date().getMonth(), 9, 19),
      eventEnd: null,
      eventName: 'Reservation at La Ginestre',
      eventColor: 'indigo'
    },
    {
      eventStart: new Date(new Date().getFullYear(), new Date().getMonth(), 11, 10),
      eventEnd: new Date(new Date().getFullYear(), new Date().getMonth(), 11, 11),
      eventName: '⛱️ Relax for 2 at Marienbad',
      eventColor: 'indigo'
    },
    {
      eventStart: new Date(new Date().getFullYear(), new Date().getMonth(), 11, 19),
      eventEnd: null,
      eventName: '⚽ 2021 - Semi-final',
      eventColor: 'red'
    },
    {
      eventStart: new Date(new Date().getFullYear(), new Date().getMonth(), 14, 10),
      eventEnd: new Date(new Date().getFullYear(), new Date().getMonth(), 14, 11),
      eventName: 'Team Catch-up',
      eventColor: 'sky'
    },
    {
      eventStart: new Date(new Date().getFullYear(), new Date().getMonth(), 21, 2),
      eventEnd: null,
      eventName: 'Pick up Marta at school',
      eventColor: 'emerald'
    },
    {
      eventStart: new Date(new Date().getFullYear(), new Date().getMonth(), 21, 3),
      eventEnd: new Date(new Date().getFullYear(), new Date().getMonth(), 21, 7),
      eventName: '✍️ New Project (2)',
      eventColor: 'yellow'
    },
    {
      eventStart: new Date(new Date().getFullYear(), new Date().getMonth(), 22, 10),
      eventEnd: new Date(new Date().getFullYear(), new Date().getMonth(), 22, 11),
      eventName: 'Team Catch-up',
      eventColor: 'sky'
    },
    {
      eventStart: new Date(new Date().getFullYear(), new Date().getMonth(), 22, 19),
      eventEnd: null,
      eventName: '⚽ 2021 - Semi-final',
      eventColor: 'red'
    },
    {
      eventStart: new Date(new Date().getFullYear(), new Date().getMonth(), 23, 0),
      eventEnd: new Date(new Date().getFullYear(), new Date().getMonth(), 23, 23),
      eventName: 'You stay at Meridiana B&B',
      eventColor: 'indigo'
    },
    {
      eventStart: new Date(new Date().getFullYear(), new Date().getMonth(), 25, 10),
      eventEnd: new Date(new Date().getFullYear(), new Date().getMonth(), 25, 11),
      eventName: 'Meeting w/ Kylie Joh',
      eventColor: 'sky'
    },
    {
      eventStart: new Date(new Date().getFullYear(), new Date().getMonth(), 29, 10),
      eventEnd: new Date(new Date().getFullYear(), new Date().getMonth(), 29, 11),
      eventName: 'Call Request ->',
      eventColor: 'sky'
    },
    // Next month
    {
      eventStart: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 2, 3),
      eventEnd: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 2, 7),
      eventName: '✍️ New Project (2)',
      eventColor: 'yellow'
    },
    {
      eventStart: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 14, 10),
      eventEnd: new Date(new Date().getFullYear(), new Date().getMonth(), 14, 11),
      eventName: 'Team Catch-up',
      eventColor: 'sky'
    },
    {
      eventStart: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 25, 2),
      eventEnd: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 25, 3),
      eventName: 'Pick up Marta at school',
      eventColor: 'emerald'
    },
    {
      eventStart: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 27, 21),
      eventEnd: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 27, 22),
      eventName: '⚽ 2021 - Semi-final',
      eventColor: 'red'
    },
  ]

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
      <WelcomeBanner />

      <CalendarProvider>
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">

          <Progress data={progressSteps} />

          <hr className="my-6 border-t border-slate-200 dark:border-slate-700" />

          {/* Page header */}
          <div className="sm:flex sm:justify-between sm:items-center mb-4">

            {/* Left: Title */}
            <CalendarTitle />

            {/* Right: Actions */}
            <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">

              <CalendarNavigation />

              <hr className="w-px h-full bg-slate-200 dark:bg-slate-700 border-none mx-1" />

              {/* Create event button */}
              <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                  <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                </svg>
                <span className="hidden xs:block ml-2">Create Event</span>
              </button>

            </div>

          </div>

          {/* Filters and view buttons */}
          <div className="sm:flex sm:justify-between sm:items-center mb-4">

            {/* Filters  */}
            <div className="mb-4 sm:mb-0 mr-2">
              <ul className="flex flex-wrap items-center -m-1">
                <li className="m-1">
                  <button className="btn-sm bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-500 dark:text-slate-400">
                    <div className="w-1 h-3.5 bg-sky-500 shrink-0"></div>
                    <span className="ml-1.5">Acme Inc.</span>
                  </button>
                </li>
                <li className="m-1">
                  <button className="btn-sm bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-500 dark:text-slate-400">
                    <div className="w-1 h-3.5 bg-emerald-500 shrink-0"></div>
                    <span className="ml-1.5">Life & Family</span>
                  </button>
                </li>
                <li className="m-1">
                  <button className="btn-sm bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-500 dark:text-slate-400">
                    <div className="w-1 h-3.5 bg-indigo-500 shrink-0"></div>
                    <span className="ml-1.5">Reservations</span>
                  </button>
                </li>
                <li className="m-1">
                  <button className="btn-sm bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-500 dark:text-slate-400">
                    <div className="w-1 h-3.5 bg-rose-400 shrink-0"></div>
                    <span className="ml-1.5">Events</span>
                  </button>
                </li>
                <li className="m-1">
                  <button className="btn-sm bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-500 dark:text-slate-400">
                    <div className="w-1 h-3.5 bg-amber-500 shrink-0"></div>
                    <span className="ml-1.5">Misc</span>
                  </button>
                </li>
                <li className="m-1">
                  <button className="btn-sm bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-indigo-500">+Add New</button>
                </li>
              </ul>
            </div>

            {/* View buttons (requires custom integration) */}
            <div className="flex flex-nowrap -space-x-px">
              <button className="btn bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:bg-slate-50 text-indigo-500 rounded-none first:rounded-l last:rounded-r">Month</button>
              <button className="btn bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-300 rounded-none first:rounded-l last:rounded-r">Week</button>
              <button className="btn bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-300 rounded-none first:rounded-l last:rounded-r">Day</button>
            </div>
          </div>

          <CalendarTable events={events} />

        </div>
      </CalendarProvider>


      {/* Dashboard actions */}
      <div className="sm:flex sm:justify-between sm:items-center mb-8">
        {/* Left: Avatars */}
        <DashboardAvatars />
        {/* Right: Actions */}
        <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
          {/* Filter button */}
          <FilterButton align="right" />
          {/* Datepicker built with flatpickr */}
          <Datepicker align="right" />
          {/* Add view button */}
          <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
            <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
              <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
            </svg>
            <span className="hidden xs:block ml-2">Add View</span>
          </button>
        </div>
      </div>

    </div>
  )
}
