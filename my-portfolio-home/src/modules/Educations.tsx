import React, { Suspense } from "react";

const EducationModule = React.lazy(() => import(/* webpackPreload: true */ 'educations/Educations').catch(err => console.error(err)));

const Educations = (props) => (
    <Suspense fallback={<div></div>}>
        <EducationModule {...props} />
    </Suspense>
)

export default Educations;