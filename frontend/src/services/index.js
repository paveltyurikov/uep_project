export const updateLocalStorageQuestions = (questions) => {
    localStorage.setItem('questions', JSON.stringify(questions))
};

export const loadLocalStorageQuestions = () => {
    const questions = localStorage.getItem('questions');
    return questions ? JSON.parse(questions) : []
};


export const updateLocalStorageActiveQuestion = (activeQuestion) => {
    localStorage.setItem('activeQuestion', JSON.stringify(activeQuestion))
};

export const loadLocalStorageActiveQuestion = () => {
    const activeQuestion = localStorage.getItem('activeQuestion');
    return activeQuestion ? JSON.parse(activeQuestion) : {}
};

export const updateLocalStorageActiveDisplayQuestion = (activeQuestion) => {
    localStorage.setItem('activeDisplayQuestion', JSON.stringify(activeQuestion))
};
export const loadLocalStorageActiveDisplayQuestion = () => {
    const activeQuestion = localStorage.getItem('activeDisplayQuestion');
    return activeQuestion ? JSON.parse(activeQuestion) : {}
};

export const updateLocalStorageTimeOutedQuestions = (activeQuestion) => {
    localStorage.setItem('timeOutedQuestionsIDs', JSON.stringify(activeQuestion))
};
export const loadLocalStorageTimeOutedQuestions = () => {
    const activeQuestion = localStorage.getItem('timeOutedQuestionsIDs');
    return activeQuestion ? JSON.parse(activeQuestion) : []
};


export const updateLocalStorageTeam = (team) => {
    localStorage.setItem('team', JSON.stringify(team))
};

export const loadLocalStorageTeam = () => {
    const team = localStorage.getItem('team');
    return team ? JSON.parse(team) : null
};

export const updateLocalStorageAnsweredQuestions = (answeredQuestionsIDs) => {
    localStorage.setItem('answeredQuestionsIDs', JSON.stringify(answeredQuestionsIDs))
};
export const loadLocalStorageAnsweredQuestion = () => {
    const answeredQuestionsIDs = localStorage.getItem('answeredQuestionsIDs');
    return answeredQuestionsIDs ? JSON.parse(answeredQuestionsIDs) : []
};


export const clearLocalStorageData = (items = []) => {
    if (items.length > 0) {
        items.forEach(item => {
            localStorage.removeItem(item)
        })
    }
}