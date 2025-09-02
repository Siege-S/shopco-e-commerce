function StarRating({ value = 0, max = 5 }) {
  return (
    <div className="flex gap-1 items-center">
      {Array.from({ length: max }).map((_, i) => {
        const index = i + 1;
        const full = index <= value;
        const half = !full && index - 0.5 <= value;

        return (
          <span key={i}>
            {full ? (
              <svg
                className="size-4 lg:size-4.5 text-yellow-400"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 .587l3.668 7.568L24 9.423l-6 5.847L19.336 24 12 19.897 4.664 24 6 15.27 0 9.423l8.332-1.268z" />
              </svg>
            ) : half ? (
              <svg
                className="size-4 lg:size-4.5 text-yellow-400"
                viewBox="0 0 24 24"
                fill="url(#half)"
              >
                <defs>
                  <linearGradient id="half">
                    <stop offset="50%" stopColor="currentColor" />
                    <stop offset="50%" stopColor="lightgray" />
                  </linearGradient>
                </defs>
                <path d="M12 .587l3.668 7.568L24 9.423l-6 5.847L19.336 24 12 19.897 4.664 24 6 15.27 0 9.423l8.332-1.268z" />
              </svg>
            ) : (
              <svg
                className="size-4 lg:size-4.5 text-gray-300"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 .587l3.668 7.568L24 9.423l-6 5.847L19.336 24 12 19.897 4.664 24 6 15.27 0 9.423l8.332-1.268z" />
              </svg>
            )}
          </span>
        );
      })}
      <span className="text-xs">
        {value}/{max}
      </span>
    </div>
  );
}

export default StarRating;
