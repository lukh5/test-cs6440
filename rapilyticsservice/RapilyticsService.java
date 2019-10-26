import com.sun.net.httpserver.HttpContext;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpServer;
import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;

public class RapilyticsService {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        // Source material for setting up Java HTTP server
        // https://www.codeproject.com/tips/1040097/create-a-simple-web-server-in-java-http-server
        int port = 80;
        try {
            System.out.println("Starting server at Port " + port);
            HttpServer server = HttpServer.create(new InetSocketAddress(port), 0);
            System.out.println("Hello World at Port " + port);
            server.createContext("/", new RootHandler());
            server.setExecutor(null);
            server.start();
        } catch (IOException e) {
            System.out.println("Error: " + e.toString());
        }
    }
}