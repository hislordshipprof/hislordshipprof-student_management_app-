from django.urls import path
from .import HodViews,StudentViews,views

urlpatterns = [

    path('',HodViews.getRoutes),
#CREATING THE PATH FOR THE HOD
    # path('admin_home',HodViews.admin_home),
    path('add_staff_save/',HodViews.add_staff_save),





    path('student/',StudentViews.student),
    # path('student/<str:pk>/',views.getStudent),
    #  path('student/<str:pk>/create',views.createStudent),
    path('staff/',HodViews.staff),
    path('staff/<str:pk>/',HodViews.getStaff),
    path('subject/',HodViews.subject),
    path('subject/<str:pk>/',HodViews.getSubjects),
   
    # path('attendance/<str:pk>/',HodViews.getAttendance),
    path('attendance/',HodViews.attendance),
    path('courses/',HodViews.list_courses),
    path('createcourses/',HodViews.createCourses),
    path('courses/<str:pk>/',HodViews.courses),
   
    
    path('attendance_report/<str:pk>/',HodViews.getAttendanceReport),

   
    path('doLogin/',views.doLogin),
    path('get_user_details/',views.GetUserDetails),
    path('logout_user/',views.logout_user),

    # path('student/<str:pk>/post/',views.postStudent),
]
