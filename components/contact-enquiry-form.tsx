'use client'

import { useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'

export function ContactEnquiryForm() {
  const [done, setDone] = useState(false)

  if (done) {
    return <div className="border border-slate-200 bg-white p-6 sm:p-9"><div className="py-16 text-center"><CheckCircle2 className="mx-auto size-12 text-emerald-600"/><h2 className="mt-5 text-3xl font-black">Request received.</h2><p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-600">Our admissions team will call or WhatsApp you from 752-2929-752 within 2–4 hours.</p><button onClick={() => setDone(false)} className="focus-ring mt-7 text-xs font-bold uppercase tracking-wider text-orange-700">Send another request</button></div></div>
  }

  return <div className="border border-slate-200 bg-white p-6 sm:p-9"><form onSubmit={(event) => { event.preventDefault(); setDone(true) }}><p className="eyebrow text-orange-600">Free demo / admission enquiry</p><h2 className="mt-3 text-3xl font-black">Tell us where you want to go.</h2><div className="mt-8 grid gap-5 sm:grid-cols-2">{[['Full name','Amit Patil'],['Email address','amit@example.com'],['Phone / WhatsApp','+91'],['Background','Civil / geography / IT / other']].map(([label, placeholder]) => <label key={label} className="text-xs font-bold uppercase tracking-wider text-slate-700">{label}<input required className="mt-2 w-full border-b border-slate-300 px-0 py-3 text-sm font-normal normal-case tracking-normal outline-none focus:border-orange-600" placeholder={placeholder}/></label>)}</div><label className="mt-6 block text-xs font-bold uppercase tracking-wider text-slate-700">Program of interest<select className="mt-2 w-full border-b border-slate-300 bg-white py-3 text-sm font-normal normal-case tracking-normal outline-none focus:border-orange-600"><option>Book 2-Day Free Trial Demo Session</option><option>GIS & Remote Sensing — 6 Month</option><option>GIS Developer — 6 Month</option><option>GIS & Land Surveying — 3 Month</option><option>GIS Python — 1 Month</option></select></label><label className="mt-6 block text-xs font-bold uppercase tracking-wider text-slate-700">What would you like to achieve?<textarea className="mt-2 min-h-24 w-full border-b border-slate-300 py-3 text-sm font-normal normal-case tracking-normal outline-none focus:border-orange-600" placeholder="Tell us about your current work or career goal."/></label><button className="focus-ring mt-8 flex w-full items-center justify-center gap-2 bg-orange-600 py-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-orange-700"><Send className="size-4"/> Request demo class</button></form></div>
}
