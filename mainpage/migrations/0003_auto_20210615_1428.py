# Generated by Django 3.2 on 2021-06-15 11:28

from django.db import migrations, models
import mainpage.models


class Migration(migrations.Migration):

    dependencies = [
        ('mainpage', '0002_feedbackcommittee_email'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='feedbackcommittee',
            name='id',
        ),
        migrations.AddField(
            model_name='feedbackcommittee',
            name='number',
            field=models.CharField(default=mainpage.models.FeedbackCommittee.generateUUID, editable=False, max_length=50, primary_key=True, serialize=False, verbose_name='Номер заказа'),
        ),
        migrations.AlterField(
            model_name='feedbackcommittee',
            name='phone',
            field=models.CharField(max_length=20, verbose_name='Телефон'),
        ),
    ]
