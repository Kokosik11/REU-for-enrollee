# Generated by Django 3.2 on 2021-06-15 11:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainpage', '0006_auto_20210615_1452'),
    ]

    operations = [
        migrations.AddField(
            model_name='feedbackcommittee',
            name='checkbox',
            field=models.BooleanField(default=False),
        ),
    ]
