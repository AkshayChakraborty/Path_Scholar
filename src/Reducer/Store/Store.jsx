import { configureStore } from "@reduxjs/toolkit";
import { BlogSlice } from "../Slice/BlogSlice";
import { BlogCategorieSlice } from "../Slice/BlogCategorieSlice";
import { BlogRecentSlice } from "../Slice/BlogRecentSlice";
import { BlogDetailsSlice } from "../Slice/BlogDetailsSlice";
// import { BlogCommentSlice } from "../Slice/BlogCommentSlice";
import { CarouselSlice } from "../HomeSlice/CarouselSlice";
import { ServicesSlice } from "../HomeSlice/ServicesSlice";
import { TestimonialsSlice } from "../HomeSlice/TestimonialsSlice";
import { TeamSlice } from "../About/TeamSlice";
import { CoursesSlice } from "../Courses/CoursesSlice";
import { AuthSlice } from "../Auth/AuthSlice";
import { ContactSlice } from "../Contact/ContactSlice";
import { CatDetailsSlice } from "../Slice/CatDetailsSlice";
import { CommentSlice } from "../Slice/BlogCommentSlice";
import { ApplyCourseSlice } from "../Apply/ApplyCourseSlice";
// import { CatDetailsSlice } from "../Slice/CatDetailsSlice";





const Store=configureStore({
    reducer:{
        blogdata:BlogSlice.reducer,
        blogcategorie:BlogCategorieSlice.reducer,
        blogrecent:BlogRecentSlice.reducer,
        blogdetails:BlogDetailsSlice.reducer,
        homecarousel:CarouselSlice.reducer,
        homeservice:ServicesSlice.reducer,
        hometestimonials:TestimonialsSlice.reducer,
        aboutteam:TeamSlice.reducer,
        course:CoursesSlice.reducer,
        Auth:AuthSlice.reducer,
        catdetailsData:CatDetailsSlice.reducer,
        Comment:CommentSlice.reducer,
        Contact: ContactSlice.reducer,
        apply:ApplyCourseSlice.reducer
    }
})

export default Store