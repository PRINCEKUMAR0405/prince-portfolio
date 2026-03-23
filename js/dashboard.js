// Dashboard Analytics JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // ===================================
    // Get Data from LocalStorage
    // ===================================
    function getVisitorData() {
        return JSON.parse(localStorage.getItem('portfolioVisitors') || '[]');
    }

    function getPageViews() {
        return parseInt(localStorage.getItem('portfolioPageViews') || '0');
    }

    // ===================================
    // Update Summary Statistics
    // ===================================
    function updateStats() {
        const visitors = getVisitorData();
        const pageViews = getPageViews();

        // Total page views
        document.getElementById('totalViews').textContent = pageViews.toLocaleString();

        // Unique visitors (approximation based on user agents and timestamps)
        const uniqueVisitors = visitors.length;
        document.getElementById('uniqueVisitors').textContent = uniqueVisitors.toLocaleString();

        // Last visit
        if (visitors.length > 0) {
            const lastVisit = new Date(visitors[visitors.length - 1].timestamp);
            const now = new Date();
            const diffMs = now - lastVisit;
            const diffMins = Math.floor(diffMs / 60000);
            const diffHours = Math.floor(diffMs / 3600000);
            const diffDays = Math.floor(diffMs / 86400000);

            let lastVisitText;
            if (diffMins < 1) {
                lastVisitText = 'Just now';
            } else if (diffMins < 60) {
                lastVisitText = `${diffMins} min${diffMins > 1 ? 's' : ''} ago`;
            } else if (diffHours < 24) {
                lastVisitText = `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
            } else {
                lastVisitText = `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
            }

            document.getElementById('lastVisit').textContent = lastVisitText;
        }

        // Unique referrers
        const referrers = new Set(visitors.map(v => v.referrer));
        document.getElementById('uniqueReferrers').textContent = referrers.size.toLocaleString();
    }

    // ===================================
    // Helper Functions for Data Processing
    // ===================================
    function getDeviceType(userAgent) {
        if (/mobile/i.test(userAgent)) return 'Mobile';
        if (/tablet|ipad/i.test(userAgent)) return 'Tablet';
        return 'Desktop';
    }

    function getBrowser(userAgent) {
        if (userAgent.includes('Firefox')) return 'Firefox';
        if (userAgent.includes('Chrome') && !userAgent.includes('Edg')) return 'Chrome';
        if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) return 'Safari';
        if (userAgent.includes('Edg')) return 'Edge';
        if (userAgent.includes('Opera') || userAgent.includes('OPR')) return 'Opera';
        return 'Other';
    }

    function getReferrerDomain(referrer) {
        if (!referrer || referrer === 'Direct') return 'Direct';
        try {
            const url = new URL(referrer);
            return url.hostname.replace('www.', '');
        } catch {
            return 'Unknown';
        }
    }

    // ===================================
    // Create Charts
    // ===================================
    function createVisitorsChart() {
        const visitors = getVisitorData();

        // Group by date
        const dateGroups = {};
        visitors.forEach(v => {
            const date = new Date(v.timestamp).toLocaleDateString();
            dateGroups[date] = (dateGroups[date] || 0) + 1;
        });

        const dates = Object.keys(dateGroups).sort();
        const counts = dates.map(date => dateGroups[date]);

        const ctx = document.getElementById('visitorsChart');
        if (!ctx) return;

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: dates,
                datasets: [{
                    label: 'Visitors',
                    data: counts,
                    borderColor: '#00ff88',
                    backgroundColor: 'rgba(0, 255, 136, 0.1)',
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: '#8b949e',
                            stepSize: 1
                        },
                        grid: {
                            color: 'rgba(0, 255, 136, 0.1)'
                        }
                    },
                    x: {
                        ticks: {
                            color: '#8b949e'
                        },
                        grid: {
                            color: 'rgba(0, 255, 136, 0.1)'
                        }
                    }
                }
            }
        });
    }

    function createDeviceChart() {
        const visitors = getVisitorData();
        const devices = {};

        visitors.forEach(v => {
            const device = getDeviceType(v.userAgent);
            devices[device] = (devices[device] || 0) + 1;
        });

        const ctx = document.getElementById('deviceChart');
        if (!ctx) return;

        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: Object.keys(devices),
                datasets: [{
                    data: Object.values(devices),
                    backgroundColor: [
                        '#00ff88',
                        '#00cc6f',
                        '#66ffbb'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#8b949e',
                            padding: 15
                        }
                    }
                }
            }
        });
    }

    function createReferrerChart() {
        const visitors = getVisitorData();
        const referrers = {};

        visitors.forEach(v => {
            const referrer = getReferrerDomain(v.referrer);
            referrers[referrer] = (referrers[referrer] || 0) + 1;
        });

        // Get top 5 referrers
        const sortedReferrers = Object.entries(referrers)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5);

        const ctx = document.getElementById('referrerChart');
        if (!ctx) return;

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: sortedReferrers.map(r => r[0]),
                datasets: [{
                    label: 'Visits',
                    data: sortedReferrers.map(r => r[1]),
                    backgroundColor: '#00ff88',
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: '#8b949e',
                            stepSize: 1
                        },
                        grid: {
                            color: 'rgba(0, 255, 136, 0.1)'
                        }
                    },
                    x: {
                        ticks: {
                            color: '#8b949e'
                        },
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }

    function createBrowserChart() {
        const visitors = getVisitorData();
        const browsers = {};

        visitors.forEach(v => {
            const browser = getBrowser(v.userAgent);
            browsers[browser] = (browsers[browser] || 0) + 1;
        });

        const ctx = document.getElementById('browserChart');
        if (!ctx) return;

        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: Object.keys(browsers),
                datasets: [{
                    data: Object.values(browsers),
                    backgroundColor: [
                        '#00ff88',
                        '#00cc6f',
                        '#66ffbb',
                        '#33ff99',
                        '#99ffcc'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#8b949e',
                            padding: 15
                        }
                    }
                }
            }
        });
    }

    // ===================================
    // Update Visitors Table
    // ===================================
    function updateVisitorsTable() {
        const visitors = getVisitorData();
        const tbody = document.getElementById('visitorsTableBody');

        if (visitors.length === 0) {
            tbody.innerHTML = '<tr><td colspan="6" class="no-data">No visitor data available yet</td></tr>';
            return;
        }

        // Show last 20 visitors
        const recentVisitors = visitors.slice(-20).reverse();

        tbody.innerHTML = recentVisitors.map(v => {
            const timestamp = new Date(v.timestamp).toLocaleString();
            const device = getDeviceType(v.userAgent);
            const browser = getBrowser(v.userAgent);
            const referrer = getReferrerDomain(v.referrer);

            return `
                <tr>
                    <td>${timestamp}</td>
                    <td>${device}</td>
                    <td>${browser}</td>
                    <td>${v.screen || 'Unknown'}</td>
                    <td>${v.language || 'Unknown'}</td>
                    <td>${referrer}</td>
                </tr>
            `;
        }).join('');
    }

    // ===================================
    // Export Data
    // ===================================
    function exportData() {
        const visitors = getVisitorData();
        const pageViews = getPageViews();

        const data = {
            pageViews: pageViews,
            visitors: visitors,
            exportDate: new Date().toISOString()
        };

        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `portfolio-analytics-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }

    // ===================================
    // Clear Data
    // ===================================
    function clearData() {
        if (confirm('Are you sure you want to clear all analytics data? This cannot be undone.')) {
            localStorage.removeItem('portfolioVisitors');
            localStorage.removeItem('portfolioPageViews');
            location.reload();
        }
    }

    // ===================================
    // Initialize Dashboard
    // ===================================
    function initDashboard() {
        updateStats();
        createVisitorsChart();
        createDeviceChart();
        createReferrerChart();
        createBrowserChart();
        updateVisitorsTable();
    }

    // ===================================
    // Event Listeners
    // ===================================
    document.getElementById('exportData')?.addEventListener('click', exportData);
    document.getElementById('clearData')?.addEventListener('click', clearData);
    document.getElementById('refreshData')?.addEventListener('click', () => {
        location.reload();
    });

    // Initialize on load
    initDashboard();

    // Log dashboard view
    console.log('%c📊 Analytics Dashboard Loaded', 'font-size: 16px; font-weight: bold; color: #00ff88;');
    console.log(`Total Page Views: ${getPageViews()}`);
    console.log(`Tracked Visitors: ${getVisitorData().length}`);
});
