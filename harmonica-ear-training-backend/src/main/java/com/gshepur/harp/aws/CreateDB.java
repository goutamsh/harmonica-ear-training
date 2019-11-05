package com.gshepur.harp.aws;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSCredentialsProvider;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.rds.AmazonRDS;
import com.amazonaws.services.rds.AmazonRDSClientBuilder;
import com.amazonaws.services.rds.model.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Properties;

public class CreateDB {

    final static Logger logger = LoggerFactory.getLogger(CreateDB.class);
    private AWSCredentialsProvider credentials;
    private AmazonRDS amazonRDS;
    private String db_username;
    private String db_password;
    private String db_database;
    private String db_hostname;


    public CreateDB() throws IOException {
        credentials = new
                AWSStaticCredentialsProvider(new
                BasicAWSCredentials("AKIA3P5LOJQBETUNFFRJ",
                "uf14W87c4H4MtV3Lw1tqlhqVskmvhPy3DToq6cbj"));



        amazonRDS = AmazonRDSClientBuilder.standard().withCredentials(credentials)
                .withRegion(Regions.US_EAST_1).build();


        Properties prop = new Properties();
        InputStream input = CreateDB.class.getClassLoader().getResourceAsStream("db.properties");
        prop.load(input);
        db_username = prop.getProperty("db_username");
        db_password = prop.getProperty("db_password");
        db_database = prop.getProperty("db_database");
    }

    public CreateDB(AmazonRDS amazonRDS){
        this.amazonRDS = amazonRDS;
    }
    public void createDB() {

        String identifier = "";
        CreateDBInstanceRequest request = new CreateDBInstanceRequest();
        // RDS instance name
        request.setDBInstanceIdentifier("goutam");
        request.setEngine("MySQL");
        request.setDBInstanceClass("db.t2.micro");
        request.setMultiAZ(false);
        request.setMasterUsername(db_username);
        request.setMasterUserPassword(db_password);
        request.setDBName(db_database);
        request.setStorageType("gp2");
        request.setAllocatedStorage(10);



        DBInstance instance = amazonRDS.createDBInstance(request);

        identifier = instance.getDBInstanceIdentifier();
        String status = instance.getDBInstanceStatus();
        Endpoint endpoint = instance.getEndpoint();
        String endpoint_url = "Endpoint URL not available yet.";
        if (endpoint != null) {
            endpoint_url = endpoint.toString();
        }
        logger.info("createDB "+identifier + "\t" + status);
        logger.info("createDB "+endpoint_url);

//        return identifier;



    }

    // Describe DB instances
    public void listInstances() {
        DescribeDBInstancesResult result = amazonRDS.describeDBInstances();
        List<DBInstance> instances = result.getDBInstances();
        for (DBInstance instance : instances) {
            // Information about each RDS instance
            String identifier = instance.getDBInstanceIdentifier();
            String engine = instance.getEngine();
            String status = instance.getDBInstanceStatus();
            Endpoint endpoint = instance.getEndpoint();
            String endpoint_url = "Endpoint URL not available yet.";
            if (endpoint != null) {
                endpoint_url = endpoint.toString();
            }
            logger.info("listInstances "+identifier + "\t" + engine + "\t" + status);
            logger.info("listInstances \t" + endpoint_url);
        }

    }

    public void terminateInstance(String identifier)
    {
        System.out.println("\n\nTERMINATE INSTANCE\n\n");
        try
        {
            // The DeleteDBInstanceRequest
            DeleteDBInstanceRequest request = new DeleteDBInstanceRequest();
            request.setDBInstanceIdentifier(identifier);
            request.setSkipFinalSnapshot(true);

            // Delete the RDS instance
            DBInstance instance = amazonRDS.deleteDBInstance(request);

            // Information about the RDS instance being deleted
            String status = instance.getDBInstanceStatus();
            Endpoint endpoint = instance.getEndpoint();
            String endpoint_url = "Endpoint URL not available yet.";
            if (endpoint != null)
            {
                endpoint_url = endpoint.toString();
            }

            // Do some printing work
            System.out.println(identifier + "\t" + status);
            System.out.println(endpoint_url);
        } catch (Exception e)
        {
            // Simple exception handling by printing out error message and stack trace
            System.out.println(e.getMessage());
            e.printStackTrace();
        }
    }

    public static void main(String[] args) throws IOException {

        CreateDB createDB = new CreateDB();

        //Create DB
        createDB.createDB();

        //List the instances
        createDB.listInstances();

        //Terminate the DB instance created by createDB() method
        createDB.terminateInstance("goutam");

    }

}
