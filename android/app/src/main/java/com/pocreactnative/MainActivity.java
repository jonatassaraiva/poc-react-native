package com.pocreactnative;

import android.widget.LinearLayout;

import com.reactnativenavigation.controllers.SplashActivity;

public class MainActivity extends SplashActivity {

     @Override
     public LinearLayout createSplashLayout() {
         LinearLayout view = new LinearLayout(this);
         return view;
     }
}
