import React, { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const sortOptions = [
  {
    value: 'newest',
    label: 'Terbaru',
  },
  {
    value: 'oldest',
    label: 'Terlama',
  },
];

const SortOption = ({ value, label, selected, onSelect }) => (
  <Listbox.Option
    value={value}
    className={({ active }) =>
      `${active ? 'bg-gray-100 ' : 'text-gray-900'}
        relative cursor-pointer select-none py-2 pl-10 pr-4`
    }
    onClick={() => onSelect(value)}
  >
    <span
      className={`${selected ? 'font-medium' : 'font-normal'}
        block truncate text-sm sm:text-base`}
    >
      {label}
    </span>
    {selected && (
      <span className="absolute inset-y-0  left-0 flex items-center pl-3 text-gray-900">
        <CheckIcon className="h-5 w-5" aria-hidden="true" />
      </span>
    )}
  </Listbox.Option>
);

export default function ListboxOption({ sortOrder, handleSortOrderChange }) {
  const selectedOption = sortOptions.find((option) => option.value === sortOrder);

  return (
    <Listbox value={sortOrder} onChange={handleSortOrderChange}>
      <div className="relative">
        <Listbox.Button className="relative w-40 rounded-md border bg-white py-2 pl-3 pr-10 text-left text-sm text-gray-900 shadow focus:outline-none sm:text-base">
          <span className="block truncate">{selectedOption.label}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-300"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-40 list-none overflow-auto rounded-md bg-white py-1 text-base text-gray-900 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
            {sortOptions.map((option) => (
              <SortOption
                key={option.value}
                value={option.value}
                label={option.label}
                selected={option.value === sortOrder}
                onSelect={handleSortOrderChange}
              />
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
