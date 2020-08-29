export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //make async call to DB
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Teresa',
            authorLastName:'Marjalizo',
            authorId: 123,
            createdAt: new Date()
        })
        .then(() => {
            dispatch({type: 'CREATE_PROJECT', project});
        })
        .catch((err) => {
            dispatch({type:'CREATE_PROJECT_ERROR', err});
        });
        
    }
};