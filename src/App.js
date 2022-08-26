import React, { Suspense } from 'react';
import { Switch, Route, Router, Link } from 'react-router-dom'
import RickyAndMorty from './components/RickyAndMorty';
import { useTranslation } from 'react-i18next';


export default ({ history }) => {
    const { t } = useTranslation();
    return (<>
        <div className='mt-2 mb-2'>
            <Suspense fallback="loading">
                <Router history={history}>
                    <Link to='/ricky-morty'>{t('list-ricky')}</Link>
                    <Switch>
                        <Route path="/ricky-morty" component={RickyAndMorty} />
                    </Switch>
                </Router>
            </Suspense>
        </div>

    </>)
}