# Web Keylogger

A simple web-based keylogger built as a demonstration project.  
It captures user keystrokes on a Facebook clone frontend and logs them to a server file via a PHP backend.

## Project Overview

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: PHP
- **Data Capture**: JavaScript event listeners (`keydown`)
- **Data Transfer**: Fetch API (POST request to PHP server)
- **Logging**: Keystrokes saved into a `log.txt` file on the server

## How It Works

1. A clone of Facebook is created using simple HTML, CSS, and JavaScript.
2. A JavaScript file (`keylog.js`) listens for `keydown` events and caches the pressed keys.
3. Every 2 seconds, cached keystrokes are sent to a PHP script (`keylog.php`) using a Fetch API POST request.
4. The PHP script decodes the incoming data and appends the keystrokes to `log.txt`.
5. The system logs both individual keystrokes and ensures smooth asynchronous communication between frontend and backend.

## Files

- **keylog.js**: Captures and sends keystrokes.
- **keylog.php**: Receives and logs keystrokes into `log.txt`.
- **log.txt**: Stores all captured keystrokes.
- **Facebook Clone Frontend**: Basic structure for simulating a login page.

## Setup Instructions

1. Clone the repository.
2. Set up a local server (e.g., using XAMPP, WAMP, or MAMP) to serve the files.
3. Place the project folder inside your server's root directory (e.g., `htdocs` for XAMPP).
4. Start your server and open the Facebook clone page in your browser.
5. Keystrokes entered on the page will be logged into `log.txt`.

## Disclaimer

⚠️ This project is strictly for **educational purposes** and should **not** be used for any unethical or illegal activities. Always ensure you have proper consent when capturing user data.

