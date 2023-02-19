import Data from '../Data/data.json';

const defaultFilter = {
    minHours: 0, maxHours: Number.MAX_SAFE_INTEGER,
    Title: null, Professor: null,
    minAverageRating: 0, maxAverageRating: Number.MAX_SAFE_INTEGER,
    minClassSize: 0, maxClassSize: Number.MAX_SAFE_INTEGER,
    minCredits: 0, maxCredits: Number.MAX_SAFE_INTEGER,
    lotteryRequirement: null
};

function getFilteredCourses(filter) {
    let filteredCourses = Object.entries(Data)
        .filter(([_, course]) => course['Workload (hrs/wk)'] >= filter.minHours && course['Workload (hrs/wk)'] <= filter.maxHours)

    if (filter.Title != null) {
        filteredCourses = filteredCourses.filter(course => course[1].Title.includes(filter.Title));
    }

    if (filter.Professor != null) {
        filteredCourses = filteredCourses.filter(course => course[1].Professor.includes(filter.Professor));
    }

    filteredCourses = filteredCourses.filter(([_, course]) => course.AverageRating >= filter.minAverageRating && course.AverageRating <= filter.maxAverageRating)

    filteredCourses = filteredCourses.filter(([_, course]) => course.ClassSize >= filter.minClassSize && course.ClassSize <= filter.maxClassSize)

    filteredCourses = filteredCourses.filter(([_, course]) => course['Credits'] >= filter.minCredits && course['Credits'] <= filter.maxCredits)

    if (filter.lotteryRequirement != null) {
        if (filter.lotteryRequirement === true) {
            filteredCourses = filteredCourses.filter(course => course[1].LotteryRequirement.includes("Yes"));
        } else {
            filteredCourses = filteredCourses.filter(course => course[1].LotteryRequirement.includes("None"));
        }
    }

    return filteredCourses.reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});
}

export { getFilteredCourses, defaultFilter };