import * as React from 'react';
import TitleBig from "../components/display/titles/TitleBig";
import Circle from "../components/graphics/shapes/Circle";
import SearchBox from "../components/inputs/searchfields/SearchBox";
import {Account} from "../components/navigations/bars/Account";

const StandardHeader: React.FC = () => {
    return (
        <>
            <header className='header-top'>
                <TitleBig title='Nitji'/>
            </header>

            <article className='header-search'>
                <SearchBox/>
            </article>

            <nav className='header-account'>
                <Account/>
            </nav>
        </>
    )
};

export default StandardHeader;