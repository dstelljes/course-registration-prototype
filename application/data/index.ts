import { NgModule as Module } from "@angular/core";

import { CourseService } from "./services/course-service";

@Module({
  providers: [
    CourseService
  ]
})
export class DataModule {

}
