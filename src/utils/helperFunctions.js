
const formatDate = (date) => {
    let dateObj = new Date(date);
    let day = dateObj.getDate();
    let month = dateObj.getMonth();
    let year = dateObj.getFullYear();
    return (day + "." + (month + 1) + "." + year + ".");
}

export { formatDate };