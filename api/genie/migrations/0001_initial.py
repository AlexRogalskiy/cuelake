# Generated by Django 3.1.7 on 2021-03-12 14:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('django_celery_beat', '0015_edit_solarschedule_events_choices'),
    ]

    operations = [
        migrations.CreateModel(
            name='NotebookJob',
            fields=[
                ('periodictask_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='django_celery_beat.periodictask')),
                ('notebookId', models.CharField(db_index=True, max_length=50)),
            ],
            bases=('django_celery_beat.periodictask',),
        ),
    ]
