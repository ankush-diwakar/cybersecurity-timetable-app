export const lec = [
  {
    "day": "Monday",
    "lectures": [
      {
        "time": "10:30 AM to 12:30 PM",
        "subject": "Research Methodology"
      },
      {
        "time": "1:30 PM to 3:30 PM",
        "subject": "Data Science & Analytics (P)"
      }
    ]
  },
  {
    "day": "Tuesday",
    "lectures": [
      {
        "time": "10:30 AM to 12:30 PM",
        "subject": "Research Methodology"
      },
      {
        "time": "1:30 PM to 3:30 PM",
        "subject": "Data Science & Analytics(TH)"
      },
      {
        "time": "3:30 PM to 5:30 PM",
        "subject": "Advanced Computer Networks(PR)"
      }
    ]
  },
  {
    "day": "Wednesday",
    "lectures": [
      {
        "time": "8:00 AM to 10:00 AM",
        "subject": "Software Testing"
      },
      {
        "time": "10:30 AM to 12:30 PM",
        "subject": "Advanced Computer Networks(TH)"
      },
      {
        "time": "1:30 PM to 3:30 PM",
        "subject": "Cryptography & Network Security"
      }
    ]
  },
  {
    "day": "Thursday",
    "lectures": [
      {
        "time": "10:30 AM to 12:30 PM",
        "subject": "Advanced Computer Networks(TH)"
      },
      {
        "time": "1:30 PM to 3:30 PM",
        "subject": "Cryptography & Network Security"
      }
    ]
  },
  {
    "day": "Friday",
    "lectures": [
      {
        "time": "10:30 AM to 12:30 PM",
        "subject": "Data Science & Analytics(TH)"
      }
    ]
  }
]

export const getToday = () => {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const todayIndex = new Date().getDay();
  return daysOfWeek[todayIndex];
}

export const getFormattedDate = () => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const today = new Date(); // Get today's date

  const dayName = days[today.getDay()]; // Get the day of the week (e.g., "Thursday")
  const date = today.getDate(); // Get the day of the month (e.g., 13)
  const monthName = months[today.getMonth()]; // Get the month name (e.g., "September")

  return `${dayName} ${date} ${monthName}`;
}

export const pracs = [
  {
    subject: "Advanced Computer Networks",
    practicals: [
      { practicalNo: "1", practicalName: "Implement the concept of static routing" },
      { practicalNo: "2a", practicalName: "Implement the concept of RIPv1 and RIPv2 routing protocol" },
      { practicalNo: "2b", practicalName: "Implement the concept of RIPng (RIP Next Generation) routing protocol" },
      { practicalNo: "3a", practicalName: "Implement the concept of OSPF Virtual-Link Configuration" },
      { practicalNo: "3b", practicalName: "Implement the concept OSPF Standard Area and Backbone Area" },
      { practicalNo: "3c", practicalName: "Implement the concept OSPF Stub and Totally Stubby Area" },
      { practicalNo: "4a", practicalName: "Implement the concept of BGP routing protocol" },
      { practicalNo: "4b", practicalName: "Implement the concept of BGP Path Attributes – MED" },
      { practicalNo: "4c", practicalName: "Implement the concept of BGP AS Path Attribute" },
      { practicalNo: "4d", practicalName: "Implement the concept of BGP Path Attribute - Local Preference" },
      { practicalNo: "4e", practicalName: "Configure Internal BGP (IBGP) and External BGP (EBGP)" },
      { practicalNo: "5a", practicalName: "Implement the concept of Multicast Tunneling" },
      { practicalNo: "5b", practicalName: "Implement the concept of Multicast PIM Sparse-Dense Mode" },
      { practicalNo: "5c", practicalName: "Implement the concept of Multicast PIM Sparse Mode" },
      { practicalNo: "5d", practicalName: "Implement the concept of Multicast PIM NBMA Mode" },
      { practicalNo: "6a", practicalName: "Implementing MPLS VPNs" },
      { practicalNo: "6b", practicalName: "Implementing MPLS Traffic Engineering per VRF" },
      { practicalNo: "6c", practicalName: "Implementing MPLS Traffic Engineering per L2TPV3" },
      { practicalNo: "7", practicalName: "Configuring Site-to-Site IPsec VPN Tunnel between Routers" },
      { practicalNo: "8a", practicalName: "Implementing of Static NAT (Network Address Translation)" },
      { practicalNo: "8b", practicalName: "Implementing of Dynamic NAT (Network Address Translation)" },
      { practicalNo: "9", practicalName: "Configuration of WLAN" },
      { practicalNo: "10", practicalName: "Install & Configure OpenDayLight SDN Controller for Mininet" },
    ]
  },
  {
    subject: "Data Science & Analytics",
    practicals: [
      { practicalNo: "1a", practicalName: "Explore existing Packages, APIs, Data Sets and Models, Explore GitHub, Jupyter Notebook, RStudio, Google Colab, IBM Watson Studio" },
      { practicalNo: "1b", practicalName: "Data Science Methodology: Problem to Approach, Requirements to Collection, Understanding to Preparation, Modelling to Evaluation, Deployment to Feedback" },
      { practicalNo: "2a", practicalName: "Python Libraries for Data Science - Numpy: Arrays, Dimensions, Broadcasting, Indexing, Slicing, Functions" },
      { practicalNo: "2b", practicalName: "Python Libraries for Data Science - Pandas: Series and DataFrame Functions, DateTime" },
      { practicalNo: "2c", practicalName: "Python Libraries for Data Science - Matplotlib, Seaborn: Plotting, Markers, Labels, Grid, Subplot, Scatter, Bar, Histogram, Pie Charts, Countplot" },
      { practicalNo: "2d", practicalName: "Python Libraries for Data Science - Scipy, Scikit-learn: Datasets, Standardization, Normalization, Imputation, Encoding" },
      { practicalNo: "3a", practicalName: "Statistics for Data Science - Central Tendency of Data, Standard Deviation, Skewness, Kurtosis" },
      { practicalNo: "3b", practicalName: "Statistics for Data Science - Probability Distribution & Types: Binomial, Poisson, Normal, Uniform Distribution, CDF, PDF" },
      { practicalNo: "3c", practicalName: "Statistics for Data Science - Hypothesis Testing, Confidence Intervals, Null and Alternative Hypotheses, T-Test vs Z-Test" },
      { practicalNo: "4a", practicalName: "Data Analysis with Python & Data Visualization - Import Libraries, Load Data, Statistical Summary, Outlier Detection" },
      { practicalNo: "4b", practicalName: "Data Wrangling - Pre-processing Data, Missing Values, Correcting Data Format, Standardization, Normalization, Binning" },
      { practicalNo: "5", practicalName: "Exploratory Data Analysis, Descriptive Statistics, Continuous Numerical Variables, Categorical Variables, Univariate and Multivariate Analysis" },
      { practicalNo: "6", practicalName: "Analysis of Variance (ANOVA), Correlation, F-Distribution, Causation" },
      { practicalNo: "7a", practicalName: "Model Development & Evaluation - Model Selection, Visualization, In-Sample Evaluation" },
      { practicalNo: "7b", practicalName: "Model Development & Evaluation - Prediction, Decision Making, Model Evaluation and Refinement" },
      { practicalNo: "7c", practicalName: "Model Development & Evaluation - Overfitting & Underfitting" },
      { practicalNo: "8a", practicalName: "Data Visualization - Data Visualization with Python" },
      { practicalNo: "8b", practicalName: "Data Visualization - Data Visualization using Tableau" },
      { practicalNo: "9a", practicalName: "Machine Learning for Data Science - Regression (Linear, Logistic)" },
      { practicalNo: "9b", practicalName: "Machine Learning for Data Science - Classification, Decision Trees, Random Forest" },
      { practicalNo: "10a", practicalName: "Machine Learning for Data Science - Clustering, Types, Optimal Number of Clusters" },
    ]
  }
]