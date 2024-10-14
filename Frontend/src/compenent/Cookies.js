import {  useState } from 'react'
import { Dialog, DialogBackdrop } from '@headlessui/react'
import CookieSub from './CookieSub'
export default function Cookies() {
  const [open, setOpen] = useState(true);

  
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-slate-400 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <CookieSub/>
        </div>
      </div>
    </Dialog>
  )
}