const Item = ({ text }) => (
  <li className="flex items-start mb-2">
    <svg
      className="w-3 h-3 mt-2 fill-current text-green-500 mr-2 shrink-0"
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
    </svg>
    <span>{text}</span>
  </li>
);

export default Item;
