import React, { Suspense } from "react";

const ProjectModule = React.lazy(() => import(/* webpackPreload: true */ 'projects/Projects').catch(err => console.error(err)));

const Projects = (props) => (
    <Suspense fallback={<div></div>}>
        <ProjectModule {...props} />
    </Suspense>
)

export default Projects;