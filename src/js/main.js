let videosData = [{
		name: 'City Arial fly over',
		video: 'dist/video/city.mp4',
		thumb: 'dist/img/city.png',
	},
	{
		name: 'Earth from ISS',
		video: 'dist/video/earth.mp4',
		thumb: 'dist/img/earth.png',
	},
	{
		name: 'Rain',
		video: 'dist/video/rain.mp4',
		thumb: 'dist/img/rain.png',
	},
	{
		name: 'VU Meters',
		video: 'dist/video/vu.mp4',
		thumb: 'dist/img/vu.png',
	},
]




let videoElement = document.querySelector('video') // ideally, this would be more specific. What if there was more than one video tag on the page?
let progressBar = document.querySelector('.progress-bar')



setInterval(function(){
	console.log('interval happened', videoElement.currentTime/videoElement.duration)
} , 250)

progressBar.style.width = videoElement.currentTime/videoElement.duration;
progressBar.style.backgroundColor = 'red'; 







let currentTime = videoElement.currentTime;

document.querySelector('.back-15').addEventListener('click', function () {
	videoElement.currentTime = currentTime -= 15
})

document.querySelector('.play-pause').addEventListener('click', function () {
	if (videoElement.paused){
		videoElement.play()
	}else{
		videoElement.pause()
	}
	
})
//if pause play else pause


document.querySelector('.full-screen').addEventListener('click', function () {
	videoElement.requestFullscreen()
})


document.querySelector('.forward-15').addEventListener('click', function () {
	videoElement.currentTime = currentTime += 15
})

	document.addEventListener("keydown" , function(event) {
 		if (event.keyCode == 27) {
        videoElement.remove();
       
    }
});





