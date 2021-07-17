function preload()
{}

function setup()
{
    canvas = createCanvas(690, 500);
    canvas.position(340, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}
function draw()
{
    image(video, 125, 110, 440, 280);

    fill(255, 0, 0);
    stroke(255, 255, 0);
    rect(20, 25, 68, 63, 20);

    fill(255, 255, 0);
    stroke(255, 0, 0);
    rect(90, 40, 580, 20);

    rect(630, 90, 20, 350);

    fill(255, 0, 0);
    stroke(255, 255, 0);
    rect(605, 25, 68, 63, 20);

    fill(255, 0, 0);
    stroke(255, 255, 0);
    rect(600, 412, 68, 63, 20);

    fill(255, 255, 0);
    stroke(255, 0, 0);
    rect(43, 90, 20, 320);

    fill(255, 0, 0);
    stroke(255, 255, 0);
    rect(20, 412, 68, 63, 20);

    fill(255, 255, 0);
    stroke(255, 0, 0);
    rect(90, 440, 510, 20);
}

function take_snapshot()
{
    save('Your_Happy_Birthday_Image.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}