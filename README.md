# OpenWeatherApp

Fixed after due date: There was a bug that I didn't catch for conditional rendering failing to catch empty arrays being passed to the Forecast component. Didn't catch during development because running the same fetch call repeatedly from local host doesn't trigger it, only triggered on the first several attempts of initially opening it. 


5day forecast now chooses closest temperature in the JSON file to noon without going over noon (the noon temperature with price is right rules!) Finished after due date.

Will be utilizing https://openweathermap.org/api to make a simple weather app

Minimum Viable product finished at 3PM. 

Features to add before 8PM:

Implement Dark mode: High Priority 
  Completed 5pm. Bug: Medium, can't change input color due to styles conflicts from                       borrowed code

                 Bug: Low, can't change colors to specific colors I wanted because of style conflicts (Material UI is picky sometimes)

Be more responsive: Medium Priority
  would require a bit of refactoring the styling and component generation, I did a bit so the elements wouldn't shrink to much. I don't like the wrap, the objects should be more dynamic, but don't have the time.

Implement Routes feature url/zip should automatically do what button press should: Medium priority
    This would be fun, as well, dynamic front side routing is something I have only done once

Front side route for search: Medium priority:
    Should be easy, might start messing with that now

Clean up styling in code to be more consistent: Low priority
  This would require a big refactor of the styling, I need more UX practice with Material so a good side project.
