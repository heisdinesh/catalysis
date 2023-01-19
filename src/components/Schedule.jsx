import React from 'react'

const Schedule = () => {
  return (
    <div>
        <div className='bg-[#091C22] lg:max-w-full lg:py-12 lg:px-16 md:py-9 md:px-16 py-5 px-5'>
        <div className='text-[#E5F2FF] lg:font-bold lg:text-center lg:text-5xl lg:p-10 md:font-bold md:text-center md:text-5xl md:p-5 font-bold text-center text-5xl p-5 '>Schedule</div>
            <table class="border-collapse border border-slate-500 text-[#E5F2FF] mx-auto border-spacing-9 font-serif ">
                <thead>
                    <tr>
                    <th class="border-4 border-[#93a3eb] lg:text-5xl lg:w-[220px] p-3">Date</th>
                    <th class="border-4 border-[#93a3eb] lg:text-5xl lg:w-[320px] p-3">Event</th>
                    <th class="border-4 border-[#93a3eb] lg:text-5xl lg:w-[240px] p-3">Time</th>
                    <th class="border-4 border-[#93a3eb] lg:text-5xl lg:w-[360px] p-3">Venue</th>
                    </tr>
                </thead>
                <tbody className='text-center lg:text-2xl lg:font-semibold font-sans'>
                    <tr>
                    <td class="border-4 border-[#93a3eb] p-2 ">23-01-2022</td>
                    <td class="border-4 border-[#93a3eb] p-2 ">Inaguration</td>
                    <td class="border-4 border-[#93a3eb] p-2 ">09:30-11:00</td>
                    <td class="border-4 border-[#93a3eb] p-2 ">AV Auditorium</td>
                    </tr>
                    <tr>
                    <td class="border-4 border-[#93a3eb] p-2 ">23-01-2022</td>
                    <td class="border-4 border-[#93a3eb] p-2 ">Air Crash</td>
                    <td class="border-4 border-[#93a3eb] p-2 ">14:00-17:00</td>
                    <td class="border-4 border-[#93a3eb] p-2 ">Amphitheatre</td>
                    </tr>
                    <tr>
                    <td class="border-4 border-[#93a3eb] p-2 ">23-01-2022</td>
                    <td class="border-4 border-[#93a3eb] p-2 ">Quizz Up</td>
                    <td class="border-4 border-[#93a3eb] p-2 ">11:00-16:00</td>
                    <td class="border-4 border-[#93a3eb] p-2 ">#009 and #205 (ISE Dept)</td>
                    </tr>
                    <tr>
                    <td class="border-4 border-[#93a3eb] p-2 ">23-01-2022</td>
                    <td class="border-4 border-[#93a3eb] p-2 ">Coding JAM</td>
                    <td class="border-4 border-[#93a3eb] p-2 ">14:00-17:00</td>
                    <td class="border-4 border-[#93a3eb] p-2 ">All 4 Labs (ISE Dept)</td>
                    </tr>
                    <tr>
                    <td class="border-4 border-[#93a3eb] p-2 ">24-01-2022</td>
                    <td class="border-4 border-[#93a3eb] p-2 ">What's the Point?</td>
                    <td class="border-4 border-[#93a3eb] p-2 ">11:00-14:00</td>
                    <td class="border-4 border-[#93a3eb] p-2 ">Amphitheatre</td>
                    </tr>
                    <tr>
                    <td class="border-4 border-[#93a3eb] p-2 ">24-01-2022</td>
                    <td class="border-4 border-[#93a3eb] p-2 ">Innovator</td>
                    <td class="border-4 border-[#93a3eb] p-2 ">14:00-17:00</td>
                    <td class="border-4 border-[#93a3eb] p-2 ">Amphitheatre</td>
                    </tr>
                    <tr>
                    <td class="border-4 border-[#93a3eb] p-2 ">24-01-2022</td>
                    <td class="border-4 border-[#93a3eb] p-2 ">Call to Launch</td>
                    <td class="border-4 border-[#93a3eb] p-2 ">10:00-13:00</td>
                    <td class="border-4 border-[#93a3eb] p-2 ">#009 and #205 (ISE Dept)</td>
                    </tr>
                    <tr>
                    <td class="border-4 border-[#93a3eb] p-2 ">25-01-2022</td>
                    <td class="border-4 border-[#93a3eb] p-2 ">Code Red</td>
                    <td class="border-4 border-[#93a3eb] p-2 ">10:00-14:00</td>
                    <td class="border-4 border-[#93a3eb] p-2 ">Virtual Mode</td>
                    </tr>
                    <tr>
                    <td class="border-4 border-[#93a3eb] p-2 ">25-01-2022</td>
                    <td class="border-4 border-[#93a3eb] p-2 ">Techno Seek</td>
                    <td class="border-4 border-[#93a3eb] p-2 ">12:00-15:00</td>
                    <td class="border-4 border-[#93a3eb] p-2 ">DSCE Campus</td>
                    </tr>
                    <tr>
                    <td class="border-4 border-[#93a3eb] p-2 ">25-01-2022</td>
                    <td class="border-4 border-[#93a3eb] p-2 ">Prize Distribution</td>
                    <td class="border-4 border-[#93a3eb] p-2 ">15:00-16:00</td>
                    <td class="border-4 border-[#93a3eb] p-2 ">AV Auditorium</td>
                    </tr>
                    <tr>
                    <td class="border-4 border-[#93a3eb] p-2 ">25-01-2022</td>
                    <td class="border-4 border-[#93a3eb] p-2 ">Closing Ceremony</td>
                    <td class="border-4 border-[#93a3eb] p-2 ">16:00-16:30</td>
                    <td class="border-4 border-[#93a3eb] p-2 ">AV Auditorium</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Schedule