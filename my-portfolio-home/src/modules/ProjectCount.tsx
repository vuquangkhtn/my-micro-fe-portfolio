import React, { Suspense } from "react";

const ProjectCountModule = React.lazy(() => import(/* webpackPreload: true */ 'projects/ProjectCount').catch(err => console.error(err)));

const ProjectCount = (props) => (
    <Suspense fallback={<div></div>}>
        <ProjectCountModule {...props} />
    </Suspense>
)

export default ProjectCount;