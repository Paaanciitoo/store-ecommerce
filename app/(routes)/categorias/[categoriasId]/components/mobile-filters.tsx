"use client";

import Button from "@/components/ui/button";
import IconButton from "@/components/ui/icon-button";
import { Pesos, Color } from "@/types";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import Filter from "./filter";

interface MobileFiltersProps {
  Pesos: Pesos[];
  Colores: Color[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ Pesos, Colores }) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filtros
        <Plus size={20} />
      </Button>

      <Dialog
        open={open}
        as="div"
        className="relative z-[100] lg:hidden"
        onClose={onClose}
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />

        {/* Posición del diálogo */}
        <div className="fixed inset-0 z-[100] flex">
          <DialogPanel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            {/* Cerrar diálogo */}
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>
            {/* Filtros */}
            <div className="p-4">
              <Filter valueKey="pesosId" name="Pesos" data={Pesos} />
              <Filter valueKey="coloresId" name="Colores" data={Colores} />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
