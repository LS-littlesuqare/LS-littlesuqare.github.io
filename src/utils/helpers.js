const validateProgrammingLanguage = (language) => {
    const supportedLanguages = ['Turbowarp', 'Python', 'C/C++', 'Java'];
    return supportedLanguages.includes(language);
};

const formatSubmissionDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
};

const truncateString = (str, maxLength) => {
    if (str.length > maxLength) {
        return str.substring(0, maxLength) + '...';
    }
    return str;
};

export { validateProgrammingLanguage, formatSubmissionDate, truncateString };