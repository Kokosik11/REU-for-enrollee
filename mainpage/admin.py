from django.contrib import admin
from .models import FeedbackCommittee, Category, Price

@admin.register(Category)
class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_on')
    list_display_links = ('title',)
    search_fields = ('title',)
    ordering = ['-created_on']

@admin.register(FeedbackCommittee)
class FeedbackAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'status')
    list_editable = ('status',)
    list_display_links = ('name', 'email',)
    search_fields = ('name', 'email',)
    list_filter = ('status',)
    ordering = ['-created_on']

admin.site.register(Price)

admin.site.site_title = 'Администрирование абитуриентам РЭУ'
admin.site.site_header = 'Абитуриентам РЭУ'
