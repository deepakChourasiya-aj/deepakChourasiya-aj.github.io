{/* <script
  src="https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js">
</script>

<script>
    GitHubCalendar(".calendar", "your-username");

    // or enable responsive functionality:
    GitHubCalendar(".calendar", "your-username", { responsive: true });

    // Use a proxy
    GitHubCalendar(".calendar", "your-username", {
       proxy (username) {
         return fetch(`https://your-proxy.com/github?user=${username}`)
       }
    }).then(r => r.text())
</script> */}