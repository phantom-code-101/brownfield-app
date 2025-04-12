package com.vinkt.brownfielldapp

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.facebook.react.ReactFragment
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler

class MyReactFrameActivity : AppCompatActivity(), DefaultHardwareBackBtnHandler {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_react_frame)
        val launchOptions = Bundle()
        launchOptions.putString("message", "my value")

        val fragment = ReactFragment.Builder()
            .setComponentName("HelloWorld")
            .setLaunchOptions(launchOptions)
            .build()

        val ft =supportFragmentManager.beginTransaction()
        ft.add(R.id.react_native_fragment, fragment)
        ft.commit()
    }

    override fun invokeDefaultOnBackPressed() {
        super.onBackPressed()
    }
}