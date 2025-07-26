'use client';
import React from 'react';

interface ChecklistItem {
  title: string;
  is_checked: boolean;
}

interface Props {
  items: ChecklistItem[];
}

const Checklist: React.FC<Props> = ({ items }) => {
  if (!items || items.length === 0) return null;
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Check Lists</h2>
      <ul className="list-disc pl-5">
        {items.map((item, i) => (
          <li key={i} className={item.is_checked ? 'text-green-600' : 'text-gray-500'}>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checklist;
