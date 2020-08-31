import React, { Component, useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { AuthContext } from '../contexts/AuthContext'

// export class BookList extends Component {

//     render() {
        
//         return (
//           <AuthContext.Consumer>{(AuthContext) => {
//               return(
//                 <ThemeContext.Consumer>{(Themecontext) => {
//                     const {isAuthenticated, toggleAuth} = AuthContext;
//                     const {isLightTheme, light, dark} = Themecontext;
//                     const theme = isLightTheme ? light : dark;
//                         return(
//                             <div style={{background: theme.bg, color: theme.syntax}} className='book-list'>
//                                 <div onClick={toggleAuth}>
//                                 <p>{isAuthenticated ? 'Logged in' : 'Logged out' }</p>
//                                 </div>
//                                 <ul>
//                                     <li style={{background: theme.ui}}>the way of kings</li>
//                                     <li style={{background: theme.ui}}>the name of the wind</li>
//                                     <li style={{background: theme.ui}}>the final empire</li>
//                                 </ul>
//                             </div>
//                         )
//                    }}</ThemeContext.Consumer>
//               )
//           }}</AuthContext.Consumer>
//         );
//     }
// }

const BookList = () => {
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const {isAuthenticated, toggleAuth} = useContext(AuthContext);
    const theme = isLightTheme ? light : dark;
    return (
        <div style={{background: theme.bg, color: theme.syntax}} className='book-list'>
            <div onClick={toggleAuth}>
            <p>{isAuthenticated ? 'Logged in' : 'Logged out' }</p>
            </div>
            <ul>
                <li style={{background: theme.ui}}>the way of kings</li>
                <li style={{background: theme.ui}}>the name of the wind</li>
                <li style={{background: theme.ui}}>the final empire</li>
            </ul>
        </div>
    );
}
 
export default BookList;

