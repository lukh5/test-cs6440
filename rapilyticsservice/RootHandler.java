import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import com.sun.net.httpserver.*;

public class RootHandler implements HttpHandler {

    // @Override
    public void handle(HttpExchange he) throws IOException {
        int port = 8989;
        String response = "<h1>Hello World</h1>" + "<h1>Port: " + port + "</h1>";
        he.sendResponseHeaders(200, response.length());
        OutputStream os = he.getResponseBody();
        os.write(response.getBytes());
        os.close();
    }
}