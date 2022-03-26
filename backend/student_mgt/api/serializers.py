
from rest_framework import serializers
from student_mgt_app.models import Students,CustomUser,Courses,NotificationStaff,AdminHOD,Subjects,Attendance, Staffs,Attendance_Report,LeaveReportStudent,LeaveReportStaff,FeedBackStudent,FeedBackStaff,NotificationStudent

class CustomUserSerializers(serializers.ModelSerializer):
    class Meta:
        model=CustomUser
        fields = '__all__'



class CoursesSerializers(serializers.ModelSerializer):
    class Meta:
        model=Courses
        fields='__all__'

class StudentsSerializers(serializers.ModelSerializer):
    course_id=CoursesSerializers(many=False,read_only=True)
 
    class Meta:
        model =Students
        fields='__all__'


class AdminHodSerializers(serializers.ModelSerializer):
     class Meta:
         model=AdminHOD
         fields='__all__'       

class StaffsSerializers(serializers.ModelSerializer):
    class Meta:
        model=Staffs
        fields='__all__'

class SubjectsSerializers(serializers.ModelSerializer):
    course_id=CoursesSerializers()
    class Meta:
        model=Subjects
        fields='__all__'

class AttendanceSerializers(serializers.ModelSerializer):
    class Meta:
        model=Attendance
        fields='__all__'    

class Attendance_ReportSerializers(serializers.ModelSerializer):
    attendance_id=AttendanceSerializers()
    class Meta:
        model=Attendance_Report
        fields='__all__'

class LeaveReportStudentSerializers(serializers.ModelSerializer):
    class Meta:
        model=LeaveReportStudent
        fields='__all__'        

class LeaveReportStaffSerializers(serializers.ModelSerializer):
    class Meta:
        model=LeaveReportStaff
        fields='__all__'

class FeedBackStudentSerializers(serializers.ModelSerializer):
    class Meta:
        model=FeedBackStudent
        fields='__all__'


class FeedBackStaffSerializers(serializers.ModelSerializer):
    class Meta:
        model=FeedBackStaff
        fields='__all__'       


class NotificationStudentSerializers(serializers.ModelSerializer):
    class Meta:
        model=NotificationStudent
        fields='__all__'

class NotificationStaffSerializers(serializers.ModelSerializer):
    class Meta:
        model=NotificationStaff
        fields='__all__'
