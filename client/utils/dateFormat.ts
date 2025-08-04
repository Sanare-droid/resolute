// Safe date formatting utility to prevent hydration mismatches
export const formatDate = (dateString: string): string => {
  try {
    const date = new Date(dateString);

    // Use a consistent format that works on both server and client
    const year = date.getFullYear();
    const month = date.toLocaleString("en-US", { month: "long" });
    const day = date.getDate();

    return `${month} ${day}, ${year}`;
  } catch (error) {
    // Fallback to the original string if parsing fails
    return dateString;
  }
};

export const formatDateWithWeekday = (dateString: string): string => {
  try {
    const date = new Date(dateString);

    const weekday = date.toLocaleString("en-US", { weekday: "long" });
    const year = date.getFullYear();
    const month = date.toLocaleString("en-US", { month: "long" });
    const day = date.getDate();

    return `${weekday}, ${month} ${day}, ${year}`;
  } catch (error) {
    return dateString;
  }
};
