from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from student_mgt_app.models import CustomUser
# Register your models here.
from .models import *

admin.site.register(Students)
admin.site.register(AdminHOD)
admin.site.register(Staffs)
admin.site.register(Courses)
admin.site.register(Subjects)
admin.site.register(Attendance)
admin.site.register(Attendance_Report)
admin.site.register(LeaveReportStudent)
admin.site.register(LeaveReportStaff)
admin.site.register(FeedBackStudent)
admin.site.register(FeedBackStaff)
admin.site.register(NotificationStudent)
admin.site.register(NotificationStaff)
admin.site.register(SessionYearModel)


class UserModel(UserAdmin):
    pass
admin.site.register(CustomUser,UserModel)