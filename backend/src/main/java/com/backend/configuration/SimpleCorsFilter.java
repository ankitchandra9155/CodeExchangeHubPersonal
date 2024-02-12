//package com.backend.configuration;
//
//import java.io.IOException;
//import java.util.HashMap;
//import java.util.Map;
//
//import javax.servlet.Filter;
//import javax.servlet.FilterChain;
//import javax.servlet.ServletException;
//import javax.servlet.ServletRequest;
//import javax.servlet.ServletResponse;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//
//public class SimpleCorsFilter implements Filter {
//	
//	private final String clientAppUrl="http://localhost:5173/*";
//
//	@Override
//	public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain)
//			throws IOException, ServletException {
//		// TODO Auto-generated method stub
//		HttpServletResponse response=(HttpServletResponse)servletResponse;
//		HttpServletRequest request=(HttpServletRequest)servletRequest;
//		Map<String,String> map=new HashMap<>();
//		
//		String originHeader=request.getHeader("origin");
//		response.setHeader("Access-Control-Allow-Origin", originHeader);
//		response.setHeader("Access-Control-Allow-Methods", "POST,GET,PUT,DELETE,OPTIONS");
//		response.setHeader("Access-Control-Max-Age", "3600");
//		response.setHeader("Access-Control-Allow-Headers", "*");
//		
//		if("OPTIONS".equalsIgnoreCase(request.getMethod())) {
//			response.setStatus(HttpServletResponse.SC_OK);
//		}
//		else
//		{
//			filterChain.doFilter(servletRequest, servletResponse);
//		}
//		
//	}
//
//	
//
//
//}


//package com.backend.configuration;
//
//import javax.servlet.Filter;
//import javax.servlet.FilterChain;
//import javax.servlet.FilterConfig;
//import javax.servlet.ServletException;
//import javax.servlet.ServletRequest;
//import javax.servlet.ServletResponse;
//import javax.servlet.annotation.WebFilter;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import java.io.IOException;
//import java.util.HashMap;
//import java.util.Map;
//
//@WebFilter("/*")
//public class SimpleCorsFilter implements Filter {
//
//    @Override
//    public void init(FilterConfig filterConfig) throws ServletException {
//        // Initialization code, if needed
//    }
//
//    @Override
//    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain)
//            throws IOException, ServletException {
//        HttpServletResponse response = (HttpServletResponse) servletResponse;
//        HttpServletRequest request = (HttpServletRequest) servletRequest;
//
//        String originHeader = request.getHeader("Origin");
//
//        response.setHeader("Access-Control-Allow-Origin", originHeader);
//        response.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
//        response.setHeader("Access-Control-Max-Age", "3600");
//        response.setHeader("Access-Control-Allow-Headers", "*");
//
//        if ("OPTIONS".equalsIgnoreCase(request.getMethod())) {
//            response.setStatus(HttpServletResponse.SC_OK);
//        } else {
//            filterChain.doFilter(servletRequest, servletResponse);
//        }
//    }
//
//    @Override
//    public void destroy() {
//        // Cleanup code, if needed
//    }
//}
//

//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.servlet.config.annotation.CorsRegistry;
//import org.springframework.web.servlet.config.annotation.EnableWebMvc;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//
//@Configuration
//@EnableWebMvc
//public class SimpleCorsFilter implements WebMvcConfigurer {
//
//    @Override
//    public void addCorsMappings(CorsRegistry registry) {
//        registry.addMapping("/**")
//                .allowedOrigins("http://localhost:5173") // Add your frontend origin here
//                .allowedMethods("GET", "POST", "PUT", "DELETE")
//                .allowedHeaders("Origin", "Content-Type", "Accept", "Authorization")
//                .allowCredentials(true);
//    }
//}
