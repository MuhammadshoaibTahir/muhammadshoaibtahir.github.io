<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Muhammad Shoaib Tahir</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

```
<!-- Google Font -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">

<!-- Font Awesome -->
<link rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

<style>
    body {
        font-family: 'Inter', sans-serif;
        margin: 0;
        background: #ffffff;
        color: #222;
        line-height: 1.6;
        transition: 0.3s;
    }

    body.dark {
        background: #121212;
        color: #f1f1f1;
    }

    a {
        color: #c40000;
        text-decoration: none;
    }

    body.dark a {
        color: #ff6b6b;
    }

    a:hover {
        text-decoration: underline;
    }

    .container {
        max-width: 1050px;
        margin: 40px auto;
        padding: 0 20px;
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    .header-left h1 {
        margin: 0;
        font-size: 2.5rem;
    }

    .pronunciation {
        color: #999;
        font-style: italic;
    }

    .icons {
        margin-top: 10px;
    }

    .icons a {
        color: #000;
        margin-right: 15px;
        font-size: 1.3rem;
    }

    body.dark .icons a {
        color: #fff;
    }

    .profile-pic {
        width: 180px;
        border-radius: 6px;
        border: 1px solid #ddd;
    }

    .highlight-box {
        background: #e8f7fb;
        border-radius: 6px;
        padding: 15px 20px;
        margin: 30px 0;
    }

    body.dark .highlight-box {
        background: #1c2a35;
    }

    section {
        margin-top: 40px;
    }

    /* BUTTON */
    .btn {
        display: inline-block;
        padding: 10px 16px;
        background: #c40000;
        color: #fff;
        border-radius: 6px;
        font-size: 0.9rem;
        margin-top: 10px;
    }

    .btn:hover {
        background: #900000;
        text-decoration: none;
    }

    /* PROJECT CARD */
    .project-card {
        border: 1px solid #ddd;
        padding: 20px;
        border-radius: 8px;
        margin-top: 20px;
        background: #fafafa;
        transition: 0.3s;
    }

    body.dark .project-card {
        background: #1e1e1e;
        border-color: #333;
    }

    .project-card:hover {
        box-shadow: 0 8px 20px rgba(0,0,0,0.1);
    }

    /* DARK MODE BUTTON */
    #darkModeToggle {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 999;
    }

    /* CAROUSEL */
    .carousel-container {
        overflow: hidden;
        margin-top: 30px;
    }

    #carouselTrack {
        display: flex;
        gap: 10px;
    }

    .carousel-img {
        height: 120px;
        border-radius: 6px;
    }

    footer {
        margin-top: 60px;
        font-size: 0.9rem;
        color: #666;
    }

    @media(max-width:768px){
        header {
            flex-direction: column;
            gap: 20px;
        }
    }
</style>
```

</head>

<body>

<!-- DARK MODE BUTTON -->

<button id="darkModeToggle" class="btn">🌙 Toggle Mode</button>

<div class="container">

```
<!-- HEADER -->
<header>
    <div class="header-left">
        <h1>Muhammad Shoaib Tahir</h1>
        <div class="pronunciation">/məˈhɑːməd ʃoʊˈeɪb ˈtɑːhɪr/</div>

        <div class="icons">
            <a href="mailto:shoaibtahir410@gmail.com"><i class="fa-solid fa-envelope"></i></a>
            <a href="https://github.com/MuhammadshoaibTahir" target="_blank"><i class="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://scholar.google.com/" target="_blank"><i class="fa-solid fa-graduation-cap"></i></a>
        </div>
    </div>

    <img src="assets/files/files.jpeg" class="profile-pic">
</header>

<!-- CAROUSEL -->
<div class="carousel-container">
    <div id="carouselTrack"></div>
</div>

<!-- HIGHLIGHT -->
<div class="highlight-box">
    I am seeking a PhD position in <strong>Computational Linguistics</strong>.
</div>

<!-- RESEARCH -->
<section>
    <h2>Research Interests</h2>
    <ul>
        <li>Corpus Linguistics</li>
        <li>Computational Linguistics & NLP</li>
        <li>Punjabi Language Resources</li>
        <li>Morphology and Syntax</li>
    </ul>
</section>

<!-- PROJECT -->
<section>
    <h2>Featured Project</h2>

    <div class="project-card">
        <h3>Lisān City — 3D Explorer</h3>
        <p>Interactive 3D visualization of Pakistani languages and dialects using Three.js.</p>

        <a href="Lisan_City.html" target="_blank" class="btn">
            🚀 View Live Project
        </a>
    </div>
</section>

<!-- LINKS -->
<section>
    <a href="Resources.html" class="btn">Learning Resources</a>
    <a href="corpus-tools.html" class="btn">Corpus Tools</a>
</section>

<!-- FOOTER -->
<footer>
    © Muhammad Shoaib Tahir · Faisalabad, Pakistan
</footer>
```

</div>

<!-- SCRIPT -->

<script src="script.js"></script>

</body>
</html>
