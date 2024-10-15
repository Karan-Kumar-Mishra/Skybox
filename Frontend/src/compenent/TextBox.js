import React from "react";
import { useState } from "react";
import { Dialog, DialogBackdrop } from "@headlessui/react";

export default function TextBox() {
  const [open, setOpen] = useState(true);

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-slate-400 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="card">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima quam, ducimus quasi, eius deserunt minus consequatur alias accusantium excepturi nam porro sit eos possimus explicabo aut in? Cumque eaque voluptatum, harum facilis impedit autem molestias doloribus a ipsum. Nobis commodi atque tenetur error sed optio consectetur voluptates quam asperiores dicta, natus, excepturi autem harum debitis est ab voluptatibus possimus hic, ipsam sint architecto itaque esse laboriosam? Labore, quaerat dolorum? Odio assumenda maxime et. Ex delectus unde sint illo similique. Asperiores tempore commodi dolor, repudiandae perferendis exercitationem facere quaerat quam repellendus nihil, voluptatum soluta atque ducimus quo mollitia eveniet neque quasi impedit at sed voluptates cum a omnis nobis. Ipsam labore facilis itaque corporis maxime praesentium temporibus eaque et quia. Adipisci perferendis similique, veniam commodi deserunt laudantium maiores quae ipsa iure earum ex enim dignissimos deleniti reprehenderit voluptates ut neque labore quaerat nemo debitis, nisi odio! Eum dignissimos alias saepe consectetur voluptates a eos, totam fuga asperiores consequuntur quam repudiandae sunt eius velit minima eveniet quis rem? Sunt, pariatur? Esse consequuntur consectetur culpa, quis cupiditate, magni id, quibusdam eaque neque aperiam repellendus iste nihil dolores assumenda aut voluptate officiis enim voluptatem labore at quo molestiae amet. Recusandae blanditiis facilis maxime dicta assumenda pariatur magnam neque minus sed quasi ullam totam a culpa, veritatis eius esse, natus maiores! Magni dolorum ea maiores, architecto fugiat consectetur natus minus odio excepturi, voluptate fuga est? Eaque, optio! Possimus impedit facere error voluptatibus dicta aspernatur, iusto aut illum eum modi tempore veritatis non in optio rerum ratione delectus mollitia totam minus rem provident labore nisi dolores. Modi sunt earum neque ab sint amet asperiores! Odio quidem voluptatibus aliquid harum voluptates similique, ut commodi alias sequi, vel porro distinctio, inventore deleniti dicta. Sit, iusto odit consequuntur, sunt incidunt modi, ipsum laboriosam officia hic illum quis placeat nulla!</div>
        </div>
      </div>
    </Dialog>
  );
}
