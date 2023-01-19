import React from 'react'

const Schedule = () => {
  return (
    <div>
        <div className='bg-[#091C22] lg:max-w-full lg:py-12 lg:px-16 md:py-9 md:px-16 py-5 px-5'>
        <div className='text-[#E5F2FF] lg:font-bold lg:text-center lg:text-5xl lg:p-10 md:font-bold md:text-center md:text-5xl md:p-5 font-bold text-center text-5xl p-5 '>Schedule</div>
            <table class="border-collapse border border-slate-500 text-[#E5F2FF] mx-auto border-spacing-9">
                <thead>
                    <tr>
                    <th class="border border-slate-600 lg:text-4xl lg:w-[180px] h">Date</th>
                    <th class="border border-slate-600 lg:text-4xl lg:w-[320px]">Event</th>
                    <th class="border border-slate-600 lg:text-4xl lg:w-[180px]">Time</th>
                    <th class="border border-slate-600 lg:text-4xl lg:w-[180px]">Venue</th>
                    </tr>
                </thead>
                <tbody className='text-center lg:text-2xl lg:font-light'>
                    <tr>
                    <td class="border border-slate-700 ">23-01-2022</td>
                    <td class="border border-slate-700 ">Inaguration</td>
                    <td class="border border-slate-700 ">09:00-11:00</td>
                    <td class="border border-slate-700 ">AV Auditorium</td>
                    </tr>
                    <tr>
                    <td class="border border-slate-700 ">23-01-2022</td>
                    <td class="border border-slate-700 ">Air Crash</td>
                    <td class="border border-slate-700 ">02:00-05:00</td>
                    <td class="border border-slate-700 ">Amphi Theater</td>
                    </tr>
                    <tr>
                    <td class="border border-slate-700 ">23-01-2022</td>
                    <td class="border border-slate-700 ">Quizz Up</td>
                    <td class="border border-slate-700 ">11:00-04:00</td>
                    <td class="border border-slate-700 ">#009 and #205</td>
                    </tr>
                    <tr>
                    <td class="border border-slate-700 ">23-01-2022</td>
                    <td class="border border-slate-700 ">Coding JAM</td>
                    <td class="border border-slate-700 ">02:00-05:00</td>
                    <td class="border border-slate-700 ">All four Labs</td>
                    </tr>
                    <tr>
                    <td class="border border-slate-700 ">24-01-2022</td>
                    <td class="border border-slate-700 ">What's the Point</td>
                    <td class="border border-slate-700 ">11:00-02:00</td>
                    <td class="border border-slate-700 ">Amphi Theater</td>
                    </tr>
                    <tr>
                    <td class="border border-slate-700 ">24-01-2022</td>
                    <td class="border border-slate-700 ">Innovator</td>
                    <td class="border border-slate-700 ">02:00-05:00</td>
                    <td class="border border-slate-700 ">Amphi Theater</td>
                    </tr>
                    <tr>
                    <td class="border border-slate-700 ">24-01-2022</td>
                    <td class="border border-slate-700 ">Call to Launch</td>
                    <td class="border border-slate-700 ">10:00-01:00</td>
                    <td class="border border-slate-700 ">#009 and #205</td>
                    </tr>
                    <tr>
                    <td class="border border-slate-700 ">25-01-2022</td>
                    <td class="border border-slate-700 ">Code Red</td>
                    <td class="border border-slate-700 ">10:00-02:00</td>
                    <td class="border border-slate-700 ">Online</td>
                    </tr>
                    <tr>
                    <td class="border border-slate-700 ">25-01-2022</td>
                    <td class="border border-slate-700 ">Techno Seek</td>
                    <td class="border border-slate-700 ">12:00-03:00</td>
                    <td class="border border-slate-700 ">College Campus</td>
                    </tr>
                    <tr>
                    <td class="border border-slate-700 ">25-01-2022</td>
                    <td class="border border-slate-700 ">Prize Distribution</td>
                    <td class="border border-slate-700 ">03:00-04:00</td>
                    <td class="border border-slate-700 ">AV Auditorium</td>
                    </tr>
                    <tr>
                    <td class="border border-slate-700 ">25-01-2022</td>
                    <td class="border border-slate-700 ">Closing Ceremony</td>
                    <td class="border border-slate-700 ">04:00-04:30</td>
                    <td class="border border-slate-700 ">AV Auditorium</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Schedule